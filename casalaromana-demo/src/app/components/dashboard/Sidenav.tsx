"use client";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { ClrLogo } from "../shared/images";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

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
        {/* NavLinks Section*/}
        <nav className="pt-4">
          <NavLinks isExpanded={isExpanded} />
        </nav>
        {/* End of NavLinks Section*/}
        {/* User Profile Section */}
        <div className="border-t border-gray-700 mb-4">
          <div className="p-4 flex items-center gap-3">
            <div className="min-w-[40px]">
              <UserCircleIcon className="h-10 w-10 text-gray-300" />
            </div>
            {isExpanded && (
              <div className="overflow-hidden transition-all duration-300">
                <h3 className="text-base font-semibold truncate">Admin</h3>
                <p className="text-sm text-gray-400 truncate">admin@mail.com</p>
              </div>
            )}
          </div>
        </div>
        {/* End User Profile Section*/}
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
