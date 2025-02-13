import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentos",
  description: "Página de Documentos de la aplicación",
};

export default function DocumentsPage() {
  return (
    <div className="flex">
      <main className="p-4">
        <h1 className="text-2xl font-bold">Documentos</h1>
        <p>Contenido de Documentos de la Aplicacion</p>
      </main>
    </div>
  );
}
