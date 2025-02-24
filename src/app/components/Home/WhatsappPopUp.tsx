"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function WhatsappPopUp() {
  const whatsapp = {
    url: "wa.me/584244604816",
    imageSrc: "/images/socialmedia/whatsapp.png",
    imageOptionalSrc: "/images/socialmedia/whatsapp.svg",
  };

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Botón flotante de WhatsApp */}
      <button
        onClick={togglePopup}
        className="bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <Image
          src={whatsapp.imageSrc || whatsapp.imageOptionalSrc}
          alt="WhatsApp Icon"
          width={30}
          height={30}
        />
      </button>

      {/* Popup de WhatsApp */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-6 w-64">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">¿Necesitas ayuda?</h2>
            <button
              onClick={togglePopup}
              className="text-gray-500 hover:text-gray-700"
            >
              X
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Envíanos un mensaje por WhatsApp
          </p>
          <Link
            href={`${whatsapp.url}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 transition-colors"
          >
            <Image
              src={whatsapp.imageSrc}
              alt="WhatsApp Icon"
              width={20}
              height={20}
              className="mr-2"
            />
            <span>Enviar mensaje</span>
          </Link>
        </div>
      )}
    </div>
  );
}
