// import { NextResponse } from "next/server"
// import nodemailer from "nodemailer"
// import { createClient } from "@/lib/supabase/server"

// export async function POST(request: Request) {
//   try {
//     const formData = await request.json()
//     const { name, email, company, message } = formData

//     const supabase = createClient()

//     // Save to Supabase
//     const { error: supabaseError } = await supabase
//       .from("contacts")
//       .insert([
//         {
//           full_name: name,
//           email_address: email,
//           company_name: company,
//           message: message,
//         },
//       ])

//     if (supabaseError) {
//       console.error("Supabase insert error:", supabaseError)
//     }

//     // Setup Nodemailer
//     const transporter = nodemailer.createTransport({
//       host: process.env.EMAIL_SERVER_HOST,
//       port: Number(process.env.EMAIL_SERVER_PORT || 465),
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_SERVER_USER,
//         pass: process.env.EMAIL_SERVER_PASSWORD,
//       },
//     })

//     // Mail content
//     const mailOptions = {
//       from: process.env.EMAIL_FROM || process.env.EMAIL_SERVER_USER,
//       to: ["sweta.soulfuel@gmail.com", "Info.soulfuelgreenenergy@gmail.com"], // ✅ fixed
//       subject: "New Message from Soulfuel Website Contact Form",
//       html: `
//         <p>Hi team,</p>
//         <p>You’ve received a new inquiry from the Soulfuel website:</p>
//         <p><strong>Full Name:</strong> ${name}</p>
//         <p><strong>Email Address:</strong> ${email}</p>
//         <p><strong>Company Name:</strong> ${company || "N/A"}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
//     }

//     await transporter.sendMail(mailOptions)

//     return NextResponse.json(
//       { message: "Message sent and saved successfully!" },
//       { status: 200 }
//     )
//   } catch (error) {
//     console.error("Error processing contact form:", error)
//     return NextResponse.json({ message: "Failed to send message." }, { status: 500 })
//   }
// }

////////


// import { Resend } from "resend"
// import { NextResponse } from "next/server"

// const resend = new Resend(process.env.RESEND_API_KEY)

// export async function POST(request: Request) {
//   try {
//     const formData = await request.json()
//     const { name, email, company, message } = formData

//     await resend.emails.send({
//       from: "Soulfuel Website  <info@soulfuelgreenenergy.com>",
//       to: ["Info.soulfuelgreenenergy@gmail.com", "sweta.soulfuel@gmail.com"],
//       subject: "New Inquiry from Soulfuel Website",
//       html: `
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Company:</strong> ${company || "N/A"}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//     })

//     return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
//   } catch (error) {
//     console.error(error)
//     return NextResponse.json({ message: "Failed to send email" }, { status: 500 })
//   }
// }


////////

import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    const { name, email, company, message } = formData

    
    await resend.emails.send({
      from: "Soulfuel Website <info@soulfuelgreenenergy.com>",
      to: ["Info.soulfuelgreenenergy@gmail.com", "sweta.soulfuel@gmail.com"],
      subject: "New Inquiry from Soulfuel Website",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

   
    await resend.emails.send({
      from: "Soulfuel Green Energy <info@soulfuelgreenenergy.com>",
      to: email,
      subject: "We’ve received your inquiry",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out to Soulfuel Green Energy! We’ve received your inquiry and our team will respond within 24 hours with a customized quote.</p>
        <p><em>Your message:</em></p>
        <blockquote>${message}</blockquote>
        <p>Best regards,<br/>Soulfuel Green Energy Team</p>
      `,
    })

    console.log("Resend key loaded:", process.env.RESEND_API_KEY ? "Yes" : "No")


    return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending emails:", error)
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 })
  }
}
