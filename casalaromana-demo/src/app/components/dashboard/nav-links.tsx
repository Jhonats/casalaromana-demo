"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";

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
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            {isExpanded && (
              <span className="ml-3 text-sm font-medium">{link.name}</span>
            )}
            {!isExpanded && (
              <div className="absolute left-12 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {link.name}
              </div>
            )}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
};
export default NavLinks;
