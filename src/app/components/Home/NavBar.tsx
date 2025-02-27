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
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { ClrLogo } from "../shared/images";

const navItems = [
  { id: "about-us", name: "Quienes somos" },
  { id: "history", name: "Historia" },
  { id: "services", name: "Servicios" },
  { id: "clients", name: "Clientes" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
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
        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
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

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[350px]">
            <SheetTitle className="text-lg font-semibold px-4 py-2">
              <div className="mb-6 flex justify-center">
                <Image
                  src="/images/casalaromanalogo.png"
                  alt="Casa La Romana Logo"
                  width={120}
                  height={40}
                  className="h-20 w-auto"
                />
              </div>
            </SheetTitle>
            <div className="flex flex-col h-full py-6">
              <div className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    className={cn(
                      "px-4 py-3 text-base font-medium rounded-md",
                      "text-gray-700 hover:text-gray-900",
                      "hover:bg-gradient-to-r hover:from-[#8B0000] hover:via-[#FF4500] hover-to-[#FFD700]",
                      "transition-colors"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mt-40 space-y-4 px-4">
                <Link href="/signup" className="block w-full">
                  <Button
                    variant="outline"
                    className="w-full border-2 border-gray-300 bg-transparent text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#8B0000] hover:via-[#FF4500] hover:to-[#FFD700] hover:border-transparent transition all duration-300 hover:animate-gradient hover:bg-[length:200%_100%]"
                  >
                    Registrarse
                  </Button>
                </Link>
                <Link href="/login" className="block w-full">
                  <Button className="w-full bg-gray-700 text-white hover:bg-gradient-to-r hover:from-[#8B0000] hover:via-[#FF4500] hover:to-[#FFD700] transition-all duration-300 hover:animate-gradient hover:bg-[length:200%_100%]">
                    Ingresar
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
}
