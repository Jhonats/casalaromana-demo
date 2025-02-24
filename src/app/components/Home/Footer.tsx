"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    icon: "/images/socialmedia/facebook.png",
    href: "#",
    name: "Facebook",
    hover: "hover:bg-blue-200",
  },
  {
    icon: "/images/socialmedia/instagram.png",
    href: "https://www.instagram.com/casalaromana.ve/",
    name: "Instagram",
    hover: "hover:bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
  },
  {
    icon: "/images/socialmedia/x.png",
    href: "X",
    name: "X",
    hover: "hover:bg-gray-500 text-white",
  },
];

const footerItems = [
  { id: "about-us", name: "Quienes somos" },
  { id: "history", name: "Historia" },
  { id: "services", name: "Servicios" },
  { id: "clients", name: "Clientes" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-gray-800 border border-b-0 border-gray-800">
      <div className="container p-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 text-xl font-bold">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1 h-10 w-10 text-accent" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <p>+58 414 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <p>info@casalaromana.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-6 text-xl font-bold">Horarios</h3>
            <div className="flex items-start space-x-3">
              <Clock className="mt-1 h-5 w-5 text-accent" />
              <div>
                <p>Lunes - Viernes: 8:00 AM - 5:00 PM</p>
                <p>Sábado: 9:00 AM - 2:00 PM</p>
                <p>Domingo: Cerrado</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="mb-6 text-xl font-bold">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {footerItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className="transition-colors hover:text-accent"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="mb-4 text-xl font-bold">Síguenos</h3>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="rounded-full bg-primary-light mt-2 transition-colors"
                  target="_blank"
                >
                  <Image
                    src={social.icon || "/placeholder.svg"}
                    className={social.hover}
                    width={30}
                    height={30}
                    alt={social.name}
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.8 }}
        className="mt-5 border-t border-primary-light p-4 text-center text-white bg-gray-800"
      >
        <p className="text-sm">
          © {new Date().getFullYear()} Casa La Romana. Todos los derechos
          reservados.
        </p>
      </motion.div>
    </footer>
  );
}
