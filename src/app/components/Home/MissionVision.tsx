"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Rocket } from "lucide-react";

const missionVision = [
  {
    title: "Nuestra Misión",
    description:
      "Nuestra misión es satisfacer las crecientes demandas del sector energético, ofreciendo soluciones innovadoras y confiables que impulsen el desarrollo sostenible del país.",
    icon: Target,
  },
  {
    title: "Nuestra Visión",
    description:
      "Aspiramos a ser líderes en la distribución de combustibles, reconocidos por nuestra excelencia operativa, compromiso con la calidad y contribución al progreso del sector energético.",
    icon: Rocket,
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

export default function MissionVision() {
  return (
    <section id="mission-vision" className="py-8 bg-gray-50">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        ></motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 px-8 max-w-[1800px] mx-auto"
        >
          {missionVision.map((item, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[#990000] via-[#FF6600] to-[#0066CC] text-black">
                    <item.icon className="h-10 w-10" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-gray-800 text-justify">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
