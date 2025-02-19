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

// const clients = Array.from({ length: 8 }, (_, i) => ({
//   name: `Cliente ${i + 1}`,
//   image: `/placeholder.svg?height=120&width=120`,
// }));

const clients = [
  {
    id: 1,
    name: "Cliente 1",
    image: "/images/clients/amy-burns.png",
  },
  {
    id: 2,
    name: "Cliente 2",
    image: "/images/clients/balazs-orban.png",
  },
  {
    id: 3,
    name: "Cliente 3",
    image: "/images/clients/delba-de-oliveira.png",
  },
  {
    id: 4,
    name: "Cliente 4",
    image: "/images/clients/evil-rabbit.png",
  },
  {
    id: 5,
    name: "Cliente 5",
    image: "/images/clients/lee-robinson.png",
  },
  {
    id: 6,
    name: "Cliente 6",
    image: "/images/clients/michael-novotny.png",
  },
  {
    id: 7,
    name: "Cliente 7",
    image: "/images/casalaromanalogo.png",
  },
  {
    id: 8,
    name: "Cliente 8",
    image: "/placeholder.svg?height=120&width=120",
  },
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Nuestros Clientes
          </h2>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            Empresas que confían en nuestra experiencia y calidad de servicio
          </p>
        </motion.div>
        <div className="flex flex-content">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1 md:-ml-2">
              {clients.map((client, id) => (
                <CarouselItem
                  key={id}
                  className="pl-4 md:basis-1/3 lg:basis-1/4"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex flex-col items-center space-y-4"
                  >
                    <div className="relative h-40 w-40 overflow-hidden space-between border-4 border-white shadow-lg">
                      <Image
                        src={client.image || "/placeholder.svg"}
                        alt={client.name}
                        width={160}
                        height={160}
                        className="object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-primary text-center">
                      {client.name}
                    </h3>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
