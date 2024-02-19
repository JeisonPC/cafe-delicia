'use client'
import React from "react";
import Map from "@/components/Map"

function Contact() {
  return (
    <div className="flex flex-col px-6 pb-32 pt-48">

      <form action=""  className="text-center flex flex-col gap-8">
      <h1 className="text-left	text-6xl	font-semibold">¿Querés hablar?</h1>
        <input type="text" placeholder="Tu nombre" />
        <input type="text" placeholder="Tu correo"/>
        <input type="text" placeholder="Tu teléfono"/>
        <input type="textarea" placeholder="¿Un mensaje?"/>
        <div>
          <button className="button-outline">¡Hablanos!</button>
        </div>
      </form>
      <div>
      <Map />
      </div>
    </div>
  );
}

export default Contact;
