import nodemailer from 'nodemailer';
import fetch from 'node-fetch';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message, recaptchaToken } = req.body;

    // Valida el token de reCAPTCHA (pseudocódigo)
    const isRecaptchaValid = await validateRecaptcha(recaptchaToken);

    if (isRecaptchaValid) {
      try {
        // Crea un transporte de correo electrónico
        const transporter = nodemailer.createTransport({
          // Configura el transporte de correo electrónico (por ejemplo, SMTP, SendGrid, etc.)
        });

        // Envía el correo electrónico
        await transporter.sendMail({
          from: 'jeisonfpovedac@gmail.com',
          to: 'jeisonfpovedac@gmail.com',
          subject: 'Asunto del correo',
          text: `Nombre: ${name}\nCorreo electrónico: ${email}\nMensaje: ${message}`,
        });

        // Responde con éxito
        res.status(200).json({ message: 'Correo enviado exitosamente' });
      } catch (error) {
        console.error('Error al enviar el correo:', error);
        // Responde con un error
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    } else {
      // Responde con un error si el token de reCAPTCHA no es válido
      res.status(400).json({ error: 'Token de reCAPTCHA no válido' });
    }
  } else {
    // Responde con un error si la solicitud no es POST
    res.status(405).json({ error: 'Método no permitido' });
  }
}

async function validateRecaptcha(token) {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: process.env.CAPTCHA_KEY_SECRET, // Reemplaza con tu clave secreta de reCAPTCHA
        response: token,
      }),
    });

    const data = await response.json();

    // Verifica si la respuesta de Google indica que el token es válido
    return data.success;
  } catch (error) {
    console.error('Error al validar el token de reCAPTCHA:', error);
    return false; // Devuelve false en caso de error
  }
}
