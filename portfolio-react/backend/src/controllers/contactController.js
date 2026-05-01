import Contact    from '../models/Contact.js';
import nodemailer from 'nodemailer';

// POST /api/contact  — save message + optional email notification
export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message)
      return res.status(400).json({ error: 'All fields are required.' });

    // Save to MongoDB
    const doc = await Contact.create({ name, email, message });

    // Email notification (only if credentials provided)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
      });
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to:   process.env.EMAIL_USER,
        subject: `📬 Portfolio Contact from ${name}`,
        html: `
          <h2>New message from your portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
      });
    }

    res.status(201).json({ success: true, message: 'Message sent!', data: doc });
  } catch (err) {
    console.error('Contact error:', err);
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
};

// GET /api/contact  — fetch all messages
export const getMessages = async (_, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Server error.' });
  }
};
