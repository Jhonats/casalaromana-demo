"use client";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { ClrLogo } from "../shared/images";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Sidenav: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidenav = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative">
      <div
        className={`h-screen bg-gray-800 text-white transition-all duration-300 
        ${isExpanded ? "w-64" : "w-16"}`}
      >
        <div className="flex justify-center items-center p-4">
          <div
            className={`relative transition-all duration-300 
            ${isExpanded ? "w-48 h-16" : "w-12 h-12"}`}
          >
            <ClrLogo />
          </div>
        </div>
        <nav className="pt-4">
          <NavLinks isExpanded={isExpanded} />
        </nav>
      </div>
      <button
        onClick={toggleSidenav}
        className={`absolute top-4 ${
          isExpanded ? "-right-4" : "-right-5"
        } bg-gray-800 text-white p-2 rounded-r-md transition-all duration-200`}
      >
        {isExpanded ? (
          <ChevronLeftIcon className="h-5 w-5" />
        ) : (
          <ChevronRightIcon className="h-5 w-5" />
        )}
      </button>
    </div>
  );
};

export default Sidenav;
