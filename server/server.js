const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Configuration du transporteur email
const transporter = nodemailer.createTransport({
  service: 'gmail',  // ou un autre service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Route pour envoyer un email
app.post('/api/send-email', async (req, res) => {
  try {
    const { email, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'votre-email@example.com',  // L'email où vous voulez recevoir les messages
      replyTo: email,
      subject: 'Nouveau message depuis le portfolio',
      text: `Message de: ${email}\n\n${message}`
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (error) {
    console.error('Erreur d\'envoi:', error);
    res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
}); 