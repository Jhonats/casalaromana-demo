import Image from "next/image";
// import { motion} from "framer-motion";

export default function AboutUs() {
  return (
    <section id="about-us" className="bg-gray-50 py-8 relative">
      <div className="p-4">
        <h1 className="mb-8 text-center text-4xl font-bold">Quienes Somos</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 p-4">
            <p className="text-lg text-gray-600">
              Nos enorgullece ser una de las principales distribuidoras de
              combustible diésel a nivel nacional. Fundados con la misión de
              satisfacer las crecientes demandas del sector energético, hemos
              evolucionado y nos hemos consolidado como un referente en la
              industria.
            </p>
            <p className="text-lg text-gray-600">
              Gracias a nuestra infraestructura de vanguardia y un equipo
              altamente capacitado, garantizamos un suministro eficiente y
              confiable en cada entrega. Nuestro compromiso con la calidad, la
              sostenibilidad y la innovación nos ha permitido, seguir impulsando
              el crecimiento del sector, manteniendo siempre el foco en la
              excelencia y el servicio al cliente
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
