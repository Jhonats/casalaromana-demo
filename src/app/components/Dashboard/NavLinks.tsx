"use client";

import React from "react";
import Link from "next/link";
import {
  UserGroupIcon,
  HomeIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { FolderIcon } from "@heroicons/react/20/solid";

interface NavLinksProps {
  isExpanded: boolean;
}

const links = [
  {
    name: "Inicio",
    href: "/dashboard",
    icon: HomeIcon,
  },
  {
    name: "Comercios",
    href: "/dashboard/commerce",
    icon: BuildingLibraryIcon,
  },
  {
    name: "Solicitudes",
    href: "/dashboard/requests",
    icon: FolderIcon,
  },
  {
    name: "Usuarios",
    href: "/dashboard/users",
    icon: UserGroupIcon,
  },
];

const NavLinks = ({ isExpanded }: NavLinksProps) => {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center px-4 py-3 hover:bg-gradient-to-r hover:from-[#990000] hover:via-[#FF6600] hover:via-[#FFCC00] hover:to-[#0066CC] hover:text-black transition-all duration-200"
          >
            <LinkIcon className="h-6 w-6 mr-4" />
            {isExpanded && (
              <span className="ml-3 text-sm font-medium">{link.name}</span>
            )}
          </Link>
        );
      })}
    </>
  );
};
export default NavLinks;
