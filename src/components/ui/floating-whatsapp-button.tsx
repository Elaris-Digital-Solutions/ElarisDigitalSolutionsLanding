"use client";

import React from "react";

const PHONE_NUMBER = "51987450340";
const DEFAULT_MESSAGE = "Hola, me gustaría conocer más sobre sus soluciones digitales.";

const FloatingWhatsappButton: React.FC = () => {
  const href = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-[60] inline-flex h-14 w-14 items-center justify-center rounded-full border border-blue-300/50 bg-blue-500/25 text-white shadow-[0_18px_45px_rgba(37,99,235,0.45)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-blue-500/35 hover:shadow-[0_24px_70px_rgba(37,99,235,0.55)] focus:outline-none focus:ring-2 focus:ring-blue-200/80 md:h-16 md:w-16"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="none"
        className="h-7 w-7"
      >
        <path
          d="M16 3C9.37258 3 4 8.37258 4 15C4 17.6973 4.87291 20.185 6.36619 22.2034L5 28.5L11.4517 27.1676C12.9702 27.9658 14.6923 28.4 16.5 28.4C23.1274 28.4 28.5 23.0274 28.5 16.4C28.5 9.77255 23.1274 4.4 16.5 4.4"
          stroke="url(#whatsapp-grad)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
        <path
          d="M13.8 11.6C13.5333 11.6 13.2 11.9333 13.2 12.2C13.2 12.4667 13.2 13.3333 14.5333 14.6667C15.8667 16 16.7333 16 17 16C17.2667 16 17.6 15.6667 17.7333 15.4C17.8667 15.1333 18.4 14.2667 18.2667 13.8667C18.1333 13.4667 16.9333 12.6667 16.6667 12.4C16.4 12.1333 15.8667 11.4667 15.6 11.0667C15.3333 10.6667 15 10 14.5333 10C14.0667 10 13.8 10.7333 13.8 11.6Z"
          fill="url(#whatsapp-grad)"
        />
        <defs>
          <linearGradient id="whatsapp-grad" x1="6" y1="4" x2="28" y2="29" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60A5FA" />
            <stop offset="1" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
      </svg>
    </a>
  );
};

export default FloatingWhatsappButton;
