"use server";

import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact";
import { Resend } from "resend";
import { rateLimiter } from "@/lib/ratelimit";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(
  formData: ContactFormData
): Promise<{ success: boolean; message: string }> {
  try {
    // Client-side validation (already done, but double-check)
    const validatedData = contactFormSchema.parse(formData);

    // Rate limiting - get IP from headers
    const headersList = await headers();
    const ip =
      headersList.get("x-forwarded-for") ||
      headersList.get("x-real-ip") ||
      "unknown";

    const rateLimitResult = await rateLimiter.limit(ip);

    if (!rateLimitResult.success) {
      return {
        success: false,
        message: `Rate limit exceeded. Please try again in ${Math.ceil(rateLimitResult.reset / 60)} minutes.`,
      };
    }

    // Server-side validation (double validation)
    const serverValidation = contactFormSchema.safeParse(validatedData);

    if (!serverValidation.success) {
      return {
        success: false,
        message: "Invalid form data. Please check your inputs.",
      };
    }

    // Send email using Resend
    const emailResult = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Update with your verified domain
      to: process.env.CONTACT_EMAIL || "swastideep67maharana@gmail.com",
      replyTo: validatedData.email,
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6; margin-bottom: 20px;">New Contact Form Submission</h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
          </div>
          <div style="background: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <h3 style="color: #111827; margin-bottom: 10px;">Message:</h3>
            <p style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${validatedData.message}</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        
        Message:
        ${validatedData.message}
      `,
    });

    if (emailResult.error) {
      console.error("Resend error:", emailResult.error);
      return {
        success: false,
        message: "Failed to send email. Please try again later.",
      };
    }

    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (error) {
    console.error("Contact form error:", error);
    
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message || "An unexpected error occurred.",
      };
    }

    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}

