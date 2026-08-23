import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Blog from "@/model/Blog";
import cloudinary from "@/lib/cloudinary";

export async function GET() {
  try {
    await connectDB();

    const blogs = await Blog.find({})
      .sort({ date: -1 })
      .lean();

    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error("GET BLOG ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blogs",
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();

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

    if (!image || image.size === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Thumbnail image is required.",
        },
        { status: 400 }
      );
    }

    // Check duplicate slug
    const existingBlog = await Blog.findOne({ slug });

    if (existingBlog) {
      return NextResponse.json(
        {
          success: false,
          message: "A blog with this permalink already exists.",
        },
        { status: 409 }
      );
    }

    // Convert image to buffer
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
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

    // Save blog
    const blog = await Blog.create({
      title,
      slug,
      date: new Date(date),
      metaTitle,
      metaDescription,
      content,

      thumbnail: uploadResult.secure_url,
      thumbnailKey: uploadResult.public_id,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Blog created successfully",
        blog,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("CREATE BLOG ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create blog",
        error: error.message,
      },
      { status: 500 }
    );
  }
}