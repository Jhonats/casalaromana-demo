"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "https://images.pexels.com/photos/2581917/pexels-photo-2581917.jpeg",
  "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg",
  "https://images.pexels.com/photos/2581923/pexels-photo-2581923.jpeg",
];

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <Carousel className="h-full w-full" opts={{ loop: true }}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[80vh] w-full">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="container flex h-full flex-col items-start justify-center text-white"
                  >
                    <h1 className="max-w-[800px] text-5xl font-bold leading-tight sm:text-6xl md:text-7xl p-4">
                      Innovación en Soluciones Energéticas
                    </h1>
                    <p className="mt-6 max-w-[600px] text-lg sm:text-xl text-gray-300 px-4">
                      Líderes en distribución y almacenamiento de combustible
                      con más de 20 años de experiencia
                    </p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mt-8 flex space-x-4"
                    >
                      <a
                        href="#services"
                        className="rounded-md bg-secondary px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-secondary-hover hover:scale-105"
                      >
                        Nuestros Servicios
                      </a>
                      <a
                        href="#contact"
                        className="rounded-md border-2 border-white bg-transparent px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
                      >
                        Contáctanos
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
}
