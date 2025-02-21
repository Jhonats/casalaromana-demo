"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const timeLineEvents = [
  {
    year: "2000",
    image: "/images/History/history.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sit",
  },
  {
    year: "2005",
    image: "/images/History/history.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sit",
  },
  {
    year: "2010",
    image: "/images/History/history.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sit",
  },
  {
    year: "2015",
    image: "/images/History/history.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sit",
  },
  {
    year: "2020",
    image: "/images/History/history.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sit",
  },
];

const HistoryCard = ({ year, image, description, index }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white relative shadow-xl rounded-lg overflow-hidden transform hover:rotate-0 transition-transform duration-300 w-full h-96 flex flex-col"
    >
      {/* Cabecera con Título */}
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 text-center">{year}</h3>
      </div>
      <div className="relative flex-1">
        <Image
          src={image || ""}
          alt={`Evento del año ${year}`}
          layout="fill"
          objectFit="cover"
          className="rounded shadow-md"
        />
      </div>
      {/* Description */}
      <div className="p-4">
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </motion.div>
  );
};

export default function History() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} id="history" className="relative py-24 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0 bg-black">
        <Image
          src="/images/History/history.jpg"
          alt="History Background"
          fill
          objectFit="cover"
          className="opacity-20"
        />
      </motion.div>
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Nuestra Historia
        </motion.h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 z-0"></div>

          {/* Timeline Events */}
          <div className="relative z-10">
            {timeLineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`flex items-center mb-16 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <HistoryCard {...event} index={index} />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
