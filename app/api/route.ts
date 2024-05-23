import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  return NextResponse.json({
    host:process.env.EMAIL_HOST,
    user: process.env.EMAIL_USER,
    port : process.env.EMAIL_PORT,
    
    name: "zeeshan"
  });
}

export async function POST(request: Request) {
  console.log(request);
  
  if (request.method === 'POST') {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    console.log({ name, email, subject, message });

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: subject || 'No subject',
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong></p>
               <p>${message}</p>`,
      });

      return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ message: 'Failed to send message. Please try again later.' }, { status: 500 });
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
  }
}
