import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comercios",
  description: "Página de Comercios de la aplicación",
};

export default function CommercePage() {
  return (
    <div className="flex">
      <main className="p-4">
        <h1 className="text-2xl font-bold">Comercios</h1>
        <p>Contenido de Comercios de la Aplicacion</p>
      </main>
    </div>
  );
}
