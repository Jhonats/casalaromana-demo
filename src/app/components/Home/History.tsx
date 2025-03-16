import Image from "next/image";

export default function History() {
  return (
    <section id="history" className="bg-gray-50 py-8 relative">
      <div className="p-4">
        <h2 className="mb-8 text-center text-4xl font-bold">
          Nuestra Historia
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative h-[300px] overflow-hidden rounded-lg p-4">
            {/* History Background */}
            <Image
              src="/images/history/history.jpg"
              alt="Nuestra Historia"
              className="h-full w-full object-cover"
              fill
            />
          </div>
          <div className="space-y-4 p-4 text-lg text-gray-800 text-justify">
            <p>
              CASA LA ROMANA, C.A. es una empresa joven, dinámica y en
              crecimiento, establecida en 2022, compuesta por un equipo de
              profesionales altamente comprometidos con la excelencia. Nos
              especializamos en ofrecer un servicio de calidad a través de
              capacitaciones continuas y certificaciones en áreas clave como la
              manipulación, gestión de riesgos, almacenamiento, distribución y
              despacho de materiales peligrosos.
            </p>
            <p>
              Nuestro enfoque nos ha permitido posicionarnos como socios
              estratégicos de nuestros clientes, siempre manteniendo altos
              estándares en la calidad del servicio y atención al cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
