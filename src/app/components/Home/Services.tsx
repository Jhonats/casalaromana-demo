"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Fuel, Truck, Settings, Shield, ClipboardCheck } from "lucide-react";

const services = [
  {
    title: "Infraestructura y Capacidad",
    description:
      "Contamos con una parcela de 4.900 m² y una capacidad instalada de 450.000 litros, distribuida en 9 tanques de almacenamiento, cada uno con capacidad de 50.000 litros. Nuestra capacidad de distribución simultánea es de 150,000 litros por día, lo que nos permite tener una rotación de 4.500,000 litros al mes.",
    icon: Fuel,
  },
  {
    title: "Cobertura y Flota",
    description:
      "Podemos movilizar desde 1 litro hasta 80.000 litros de manera simultánea, asegurando un servicio eficiente y oportuno en todo el territorio nacional.",
    icon: Truck,
  },
  {
    title: "Compromiso con la Calidad",
    description:
      "En CASA LA ROMANA, C.A., la calidad es nuestra prioridad. Trabajamos con los mejores proveedores y seguimos estrictos estándares de seguridad y calidad en cada etapa de nuestro proceso de distribución.",
    icon: ClipboardCheck,
  },
  {
    title: "Seguridad y Confiabilidad",
    description:
      "Nuestro equipo de profesionales altamente capacitados está dedicado a garantizar que cada entrega cumpla con las normativas y requisitos establecidos",
    icon: Shield,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Nuestros Servicios
          </h2>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-4"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[#990000] via-[#FF6600] to-[#0066CC] text-gray-800">
                    <service.icon className="h-10 w-10 " />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 text-justify">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
