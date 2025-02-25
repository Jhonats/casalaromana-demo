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
import { ClrLogo } from "../shared/images";

const images = [
  "/images/Hero/barrels.jpg",
  "/images/Hero/tank-up.jpg",
  "/images/Hero/tanks.jpg",
];

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <Carousel className="h-full w-full" opts={{ loop: true }}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[80vh] bg-black">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover opacity-50"
                  quality={70}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex h-full flex-col items-center justify-center text-white"
                  >
                    <ClrLogo />
                    <h2 className="mt-6 max-w-[600px] text-5xl md:text-3xl sm:text-xl text-gray-300 text-center px-4">
                      Líderes en distribución y almacenamiento de combustible
                      con más de 20 años de experiencia
                    </h2>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="mt-8 flex space-x-4"
                    ></motion.div>
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
