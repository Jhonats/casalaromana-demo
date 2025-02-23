import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solicitudes",
  description: "Página de Solciitudes de la aplicación",
};

export default function RequestsPage() {
  return (
    <div className="flex">
      <main className="p-4">
        <h1 className="text-2xl font-bold">Solicitudes</h1>
        <p>Contenido de Solicitudes de la Aplicacion</p>
      </main>
    </div>
  );
}
