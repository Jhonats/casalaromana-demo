"use client";
import { motion } from "framer-motion";
import { ClrLogo } from "../shared/images";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="relative h-screen bg-black">
        <video
          src="/video/HeroVideoCompressed.mp4"
          autoPlay={true}
          className="h-full w-full object-cover"
          loop={true}
          muted={true}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex h-full flex-col items-center justify-center text-white"
          >
            <ClrLogo />
            <h2 className="mt-6 max-w-[600px] text-4xl md:text-3xl sm:text-4xl text-gray-300 text-center px-4">
              Somos el combustible que mueve el pais
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 flex space-x-4"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
