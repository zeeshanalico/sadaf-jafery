import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Subscription Confirmation',
        text: `Hello ${name},\n\nThank you for subscribing to our newsletter!`,
        html: `<p>Hello ${name},</p><p>Thank you for subscribing to our newsletter!</p>`,
      });

      res.status(200).json({ message: 'Subscription successful!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Subscription failed. Please try again later.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
