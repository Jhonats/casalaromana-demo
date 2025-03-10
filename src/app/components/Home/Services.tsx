"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Fuel, Truck, Settings, Shield } from "lucide-react";

const services = [
  {
    title: "Distribución de Combustible",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, cumque aut temporibus non numquam amet, optio ducimus maiores aliquid quia nostrum impedit pariatur porro, perspiciatis similique! Fugit recusandae impedit tempora.",
    icon: Fuel,
  },
  {
    title: "Transporte Especializado",
    description:
      "Flota moderna de vehículos especializados para el transporte seguro de combustible.",
    icon: Truck,
  },
  {
    title: "Mantenimiento Preventivo",
    description:
      "Servicios de mantenimiento y reparación de tanques y sistemas de almacenamiento.",
    icon: Settings,
  },
  {
    title: "Seguridad y Cumplimiento",
    description:
      "Garantizamos el cumplimiento de todas las normas de seguridad y regulaciones del sector.",
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales en el manejo y distribución de
            combustible
          </p>
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
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-accent">
                    <service.icon className="h-10 w-10" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
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
