import Image from "next/image";

export default function History() {
  return (
    <section id="history" className="bg-gray-50 py-8 relative">
      <div className="p-4">
        <h2 className="mb-8 text-center text-4xl font-bold">
          Nuestra Historia
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative h-auto md:h-[300px] w-full aspect-video md:aspect-auto overflow-hidden rounded-lg">
            {/* History Background */}
            <Image
              src="/images/history/history.png"
              alt="Nuestra Historia"
              className="h-full w-full object-cover"
              fill
            />
          </div>
          <div className="space-y-4 p-4 text-lg text-gray-800 text-justify">
            <p>
              CASA LA ROMANA, C.A fue establecida en 2022, siendo una empresa
              joven, dinámica y en crecimiento. Contamos con capacitaciones
              continuas y certificaciones en áreas clave como la manipulación,
              gestión de riesgos, almacenamiento, distribución y despacho de
              materiales peligrosos siguiendo los más altos estándares de
              seguridad.
            </p>
            <p>
              Nos enorgullece ser una de las principales distribuidoras de
              combustible diésel a nivel nacional. Fundados con la misión de
              satisfacer las crecientes demandas del sector energético, hemos
              evolucionado y nos hemos consolidado como un referente en la
              industria
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
