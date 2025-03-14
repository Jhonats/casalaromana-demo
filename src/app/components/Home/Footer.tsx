"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  // {
  //   icon: "/images/SocialMedia/facebook.png",
  //   href: "#",
  //   name: "Facebook",
  //   hover: "hover:bg-blue-200",
  // },
  {
    icon: "/images/SocialMedia/instagram.png",
    href: "https://www.instagram.com/casalaromana.ve/",
    name: "Instagram",
    hover:
      "hover:bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:transition-colors hover:duration-300",
  },
  // {
  //   icon: "/images/SocialMedia/x.png",
  //   href: "X",
  //   name: "X",
  //   hover: "hover:bg-gray-500 text-white",
  // },
];

const footerItems = [
  { id: "about-us", name: "Quienes somos" },
  { id: "history", name: "Historia" },
  { id: "services", name: "Servicios" },
  { id: "clients", name: "Clientes" },
];

export default function Footer() {
  return (
    <footer className="relative bg-primary text-gray-800">
      <div className="relative p-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 text-xl font-bold">Contacto</h3>
            <div className="space-y-4">
              <a
                href="https://maps.app.goo.gl/wfEgow11CaTyShh6A"
                target="_blank"
                className="hover:text-blue-700 hover:transition-colors hover:duration-300"
              >
                <div className="flex items-start space-x-3">
                  <MapPin className="mt-1 h-5 w-5 text-gray-800" />
                  <p>Zona Industrial - Valencia</p>
                </div>
              </a>
              <a
                href="https://wa.me/584144009412"
                target="_blank"
                className="hover:text-blue-700 hover:transition-colors hover:duration-300"
              >
                <div className="flex items-center space-x-3 mt-4">
                  <Phone className="h-5 w-5 text-gray-800" />
                  <p>+58 414 400-9412</p>
                </div>
              </a>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-800" />
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
              <Calendar className="mt-1 h-5 w-5 text-gray.800" />
              <div>
                <p>Lunes - Viernes: 8:00 AM - 5:00 PM</p>
                <p>Sábado: 9:00 AM - 2:00 PM</p>
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
                  <a
                    href={`#${item.id}`}
                    className="transition-colors hover:text-blue-700 hover:transition-colors hover:duration-300"
                  >
                    {item.name}
                  </a>
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
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="rounded-full bg-primary-light mt-2 transition-colors"
                  target="_blank"
                >
                  <div
                    className={`flex items-center space-x-2 hover:text-blue-700 hover:transition-colors hover:duration-300`}
                  >
                    <Image
                      src={social.icon}
                      width={25}
                      height={25}
                      alt={social.name}
                      className="text-black"
                    />
                    <p>@casalaromana.ve</p>
                  </div>
                </a>
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
