// backend-UI/services/emailService.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.exemplo.com',
  port: 587,
  secure: false, // true para SSL
  auth: {
    user: 'seu-email@exemplo.com',
    pass: 'sua-senha',
  },
});

const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: 'seu-email@exemplo.com',
    to,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Erro ao enviar email:', error);
    } else {
      console.log('Email enviado:', info.response);
    }
  });
};

module.exports = { sendEmail };
