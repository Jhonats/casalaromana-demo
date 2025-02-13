"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";

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
    name: "Documentos",
    href: "/documents",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "Usuarios",
    href: "/users",
    icon: UserGroupIcon,
  },
  {
    name: "Comercios",
    href: "/commerce",
    icon: BuildingLibraryIcon,
  },
];

const NavLinks = ({ isExpanded }: NavLinksProps) => {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center px-4 py-3 hover:bg-gradient-to-r hover:from-[#990000] hover:via-[#FF6600] hover:via-[#FFCC00] hover:to-[#0066CC] transition-all duration-200"
          >
            <LinkIcon className="h-6 w-6 mr-4 bg-gray-800" />
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
