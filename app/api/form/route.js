import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Form from "@/model/Form";
import transporter from "@/lib/mail";

export async function POST(request) {
    try {
        const body = await request.json();

        const {
            name,
            phone,
            email,
            product,
            place,
            priceRange,
            message,
        } = body;

        // Basic validation
        if (!name || !phone || !email || !place || !message) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please fill all required fields.",
                },
                { status: 400 }
            );
        }

        // Connect to MongoDB
        await connectDB();

        // Save lead in MongoDB
        const lead = await Form.create({
            name,
            phone,
            email,
            product,
            place,
            priceRange,
            message,
        });

        // Send email
        await transporter.sendMail({
            from: `"Website Lead" <${process.env.SMTP_USER}>`,
            to: process.env.LEAD_RECEIVER_EMAIL,
            replyTo: email,
            subject: `New Lead - ${name}`,
            html: `
        <h2>New Website Lead</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Product:</strong> ${product || "Not provided"}</p>
        <p><strong>Place:</strong> ${place}</p>
        <p><strong>Price Range:</strong> ${priceRange || "Not provided"
                }</p>
        <p><strong>Message:</strong> ${message}</p>

        <hr />

        <p>
          <strong>Lead ID:</strong> ${lead._id}
        </p>
      `,
        });

        return NextResponse.json(
            {
                success: true,
                message: "Lead submitted successfully.",
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Lead form error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong. Please try again.",
            },
            { status: 500 }
        );
    }
}