import Image from "next/image";
// import { motion} from "framer-motion";

export default function AboutUs() {
  return (
    <section id="about-us" className="bg-gray-50 py-8 relative">
      <div className="p-4">
        <h1 className="mb-8 text-center text-4xl font-bold">Quienes Somos</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 p-4 text-lg text-gray-800 text-justify flex items-center">
            <p>
              CASA LA ROMANA, C.A. Es una empresa especializada en la
              distribución y Almacenamiento de Combustible de Diesel. Compuesta
              por un equipo de profesionales altamente comprometidos con la
              excelencia y capacitados para brindar un servicio de calidad y
              confiabilidad.
            </p>
          </div>
          <div className="relative h-[300px] overflow-hidden rounded-lg">
            <Image
              src="/images/background.jpg"
              alt="Acerca de Nosotros"
              className="h-full w-full object-cover"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}
