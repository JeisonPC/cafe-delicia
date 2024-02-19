"use client";
import React, { useState } from "react";
import Map from "@/components/Map";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar que se haya generado el token de reCAPTCHA
    if (!recaptchaToken) {
      console.error("Debe completar el reCAPTCHA");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      if (response.ok) {
        console.log("Correo enviado exitosamente");
        // Aquí puedes mostrar un mensaje de éxito al usuario si lo deseas
      } else {
        console.error("Error al enviar el correo:", response.statusText);
        // Aquí puedes mostrar un mensaje de error al usuario si lo deseas
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      // Aquí puedes mostrar un mensaje de error al usuario si lo deseas
    }
  };

  const handleRecaptchaChange = (token: string) => {
    setRecaptchaToken(token);
  };

  return (
    <div className="flex flex-col px-6 pb-32 pt-48">
      <form onSubmit={handleSubmit} className="text-center flex flex-col gap-8">
        <h1 className="text-left text-6xl font-semibold">¿Querés hablar?</h1>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Tu teléfono"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="¿Un mensaje?"
          value={formData.message}
          onChange={handleChange}
        />
        {/* Agregar el widget de reCAPTCHA v3 */}
        <ReCAPTCHA
          sitekey="6LfUi3cpAAAAAKC9a0F0QD0kybya_l3O9o7qDeai"
          onChange={handleRecaptchaChange}
        />
        <div>
          <button type="submit" className="button-outline">
            ¡Hablanos!
          </button>
        </div>
      </form>
      <div className="mt-16">
        <Map />
      </div>
    </div>
  );
}

export default Contact;
