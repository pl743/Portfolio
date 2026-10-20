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

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    if (
      cleanName.length > 100 ||
      cleanEmail.length > 254 ||
      cleanMessage.length > 2000
    ) {
      return res.status(400).json({
        success: false,
        message: 'One or more fields exceed the allowed length',
      });
    }

    const contact = await Contact.create({
      name: cleanName,
      email: cleanEmail,
      message: cleanMessage,
    });

    transporter
      .sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: cleanEmail,
        subject: `New Portfolio Message from ${cleanName}`,
        text: `New portfolio message

        Name: ${cleanName}
        Email: ${cleanEmail}
        Message: ${cleanMessage}`,
      })
      .then(() => {
        console.log('Contact notification email sent successfully');
      })
      .catch((emailError) => {
        console.error(
          'Email notification failed:',
          emailError.message
        );
      });

    return res.status(201).json({
      success: true,
      message: 'Your message has been saved successfully!',
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
