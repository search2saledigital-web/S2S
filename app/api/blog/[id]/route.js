import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectDB from "@/lib/mongodb";
import Blog from "@/model/Blog";
import cloudinary from "@/lib/cloudinary";

async function uploadToCloudinary(file) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "s2s-blogs",
          resource_type: "image",
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      )
      .end(buffer);
  });
}

async function deleteFromCloudinary(publicId) {
  if (!publicId) return;

  try {
    await cloudinary.uploader.destroy(publicId, {
      resource_type: "image",
    });
  } catch (error) {
    console.error("CLOUDINARY DELETE ERROR:", error);
  }
}


// ===============================
// GET SINGLE BLOG
// ===============================

export async function GET(request, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid blog ID",
        },
        { status: 400 }
      );
    }

    const blog = await Blog.findById(id).lean();

    if (!blog) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.error("GET BLOG ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blog",
      },
      { status: 500 }
    );
  }
}


// ===============================
// UPDATE BLOG
// ===============================

export async function PUT(request, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid blog ID",
        },
        { status: 400 }
      );
    }

    const existingBlog = await Blog.findById(id);

    if (!existingBlog) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found",
        },
        { status: 404 }
      );
    }

    const formData = await request.formData();

    const title = formData.get("title");
    const slug = formData.get("permalink");
    const date = formData.get("date");
    const metaTitle = formData.get("metaTitle");
    const metaDescription = formData.get("metaDescription");
    const content = formData.get("content");
    const image = formData.get("image");

    if (!title || !slug || !date || !content) {
      return NextResponse.json(
        {
          success: false,
          message: "Title, permalink, date and content are required.",
        },
        { status: 400 }
      );
    }

    // Check duplicate slug
    const duplicateBlog = await Blog.findOne({
      slug,
      _id: { $ne: id },
    });

    if (duplicateBlog) {
      return NextResponse.json(
        {
          success: false,
          message: "Another blog already uses this permalink.",
        },
        { status: 409 }
      );
    }

    let thumbnail = existingBlog.thumbnail;
    let thumbnailKey = existingBlog.thumbnailKey;

    // ==========================================
    // If NEW image is selected
    // ==========================================

    if (image && image instanceof File && image.size > 0) {
      // Upload new image
      const uploadResult = await uploadToCloudinary(image);

      thumbnail = uploadResult.secure_url;
      thumbnailKey = uploadResult.public_id;

      // Delete old image AFTER successful new upload
      if (existingBlog.thumbnailKey) {
        await deleteFromCloudinary(existingBlog.thumbnailKey);
      }
    }

    // ==========================================
    // Update MongoDB
    // ==========================================

    existingBlog.title = title;
    existingBlog.slug = slug;
    existingBlog.date = new Date(date);
    existingBlog.metaTitle = metaTitle;
    existingBlog.metaDescription = metaDescription;
    existingBlog.content = content;
    existingBlog.thumbnail = thumbnail;
    existingBlog.thumbnailKey = thumbnailKey;

    await existingBlog.save();

    return NextResponse.json(
      {
        success: true,
        message: "Blog updated successfully",
        blog: existingBlog,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("UPDATE BLOG ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to update blog",
        error: error.message,
      },
      { status: 500 }
    );
  }
}


// ===============================
// DELETE BLOG
// ===============================

export async function DELETE(request, { params }) {
  try {
    await connectDB();

    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid blog ID",
        },
        { status: 400 }
      );
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json(
        {
          success: false,
          message: "Blog not found",
        },
        { status: 404 }
      );
    }

    // Delete Cloudinary image
    if (blog.thumbnailKey) {
      await deleteFromCloudinary(blog.thumbnailKey);
    }

    // Delete MongoDB document
    await Blog.findByIdAndDelete(id);

    return NextResponse.json(
      {
        success: true,
        message: "Blog and thumbnail deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE BLOG ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete blog",
        error: error.message,
      },
      { status: 500 }
    );
  }
}