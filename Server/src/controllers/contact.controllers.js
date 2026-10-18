import Contact from '../models/Contact.js';
import transporter from '../config/mailer.js';

export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: 'Name, email and message are required',
      });
    }

    if (
      name.trim().length > 100 ||
      email.trim().length > 254 ||
      message.trim().length > 2000
    ) {
      return res.status(400).json({
        success: false,
        message: 'One or more fields exceed the allowed length',
      });
    }

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email.trim(),
        subject: `New Portfolio Message from ${name.trim()}`,
        text: `You have received a new message from your portfolio. Name: ${name.trim()} Email: ${email.trim()} Message: ${message.trim()}`,
      });

      console.log('Contact notification email sent successfully');
    } catch (emailError) {
      // Keep the saved message even if email delivery fails
      console.error(
        'Email notification failed:',
        emailError.message
      );
    }

    return res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully!',
      contactId: contact._id,
    });

  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: 'Please check the submitted information',
      });
    }

    console.error('Contact form error:', error.message);

    return res.status(500).json({
      success: false,
      message: 'Please try again later.',
    });
  }
};
