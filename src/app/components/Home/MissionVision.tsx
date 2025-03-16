"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Rocket } from "lucide-react";

export default function MissionVision() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      id="missionvision"
      className="relative py-24 overflow-hidden bg-gray-50"
    >
      {/* <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="/images/missionvision/missionvision.jpeg"
          alt="Mission Vision Background"
          className="w-full h-full object-cover"
        />
      </motion.div> */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-8" // Añadido padding-top para evitar que quede pegado arriba
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-md rounded-lg p-8 md:p-10 shadow-lg"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#990000] via-[#FF6600] to-[#0066CC] text-black">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Nuestra Misión
              </h3>
              <p className="text-lg text-gray-800 mb-4 text-justify">
                Nuestra misión es comercializar diésel mediante la compra,
                venta, almacenamiento, transporte y distribución para diversos
                usos: industrial, agroindustrial, agrícola, pecuario, pesquero,
                del sector salud, así como para servicios básicos, tanto
                públicos como privados. Buscamos garantizar la operatividad de
                todos los sectores productivos del país.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-md rounded-lg p-8 md:p-10 shadow-xl border border-gray-200"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#990000] via-[#FF6600] to-[#0066CC] text-black">
                <Rocket className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Nuestra Visión
              </h3>
              <p className="text-lg text-gray-800 mb-4 text-justify">
                Aspiramos a ser la distribuidora de combustible diésel más
                reconocida y respetada en el país, destacándonos por nuestra
                excelencia operativa y compromiso con la sostenibilidad. Nos
                esforzamos por innovar y mejorar continuamente nuestros procesos
                para ofrecer un servicio que supere las expectativas de nuestros
                clientes.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
