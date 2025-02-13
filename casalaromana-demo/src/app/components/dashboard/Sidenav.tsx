"use client";
import React, { useState } from "react";
import NavLinks from "./nav-links";

export default function Sidenav() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidenav = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`h-screen bg-gray-800 text-white transition-all duration-300 ${
        isExpanded ? "w-64" : "w-16"
      }`}
    >
      <button
        className="w-full p-3 text-right hover:bg-gray-700"
        onClick={toggleSidenav}
      >
        {isExpanded ? "⬅" : "➡"}
      </button>
      <NavLinks isExpanded={isExpanded} />
    </div>
  );
}
