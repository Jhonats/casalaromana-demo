"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const navItems = [
    { id: "about-us", name: "Quienes somos" },
    { id: "history", name: "Historia" },
    { id: "services", name: "Servicios" },
    { id: "clients", name: "Clientes" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b bg-gray-100/80 backdrop-blur-md"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 px-4">
          <Image
            src="/images/casalaromanalogo.png"
            alt="Casa La Romana Logo"
            width={120}
            height={40}
            className="h-10 w-auto transition-transform duration-300 hover:scale-105"
          />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.id}>
                <Link href={`#${item.id}`} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      "inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                      "text-gray-700 hover:text-gray-900",
                      "hover:bg-gradient-to-r hover:from-[#8B0000] hover:via-[#FF4500] hover:to-[#FFD700]",
                      "hover:bg-[length:200%_100%] hover:animate-gradient",
                      "focus:bg-gray-200 focus:text-gray-900 focus:outline-none",
                      "disabled:pointer-events-none disabled:opacity-50",
                      "data-[active]:bg-gray-200/50"
                    )}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-4">
          <Link href="/signup">
            <Button
              variant="outline"
              className="border-2 border-gray-300 bg-transparent text-gray-700 hover:text-white
                         hover:bg-gradient-to-r hover:from-[#8B0000] hover:via-[#FF4500] hover:to-[#FFD700]
                         hover:border-transparent transition-all duration-300 hover:animate-gradient
                         hover:bg-[length:200%_100%]"
            >
              Registrarse
            </Button>
          </Link>
          <Link href="/login">
            <Button
              className="bg-gray-700 text-white
                         hover:bg-gradient-to-r hover:from-[#8B0000] hover:via-[#FF4500] hover:to-[#FFD700]
                         transition-all duration-300 hover:animate-gradient
                         hover:bg-[length:200%_100%]"
            >
              Ingresar
            </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
