import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usuarios",
  description: "Página de Usuarios de la aplicación",
};

export default function UsersPage() {
  return (
    <div className="flex">
      <main className="p-4">
        <h1 className="text-2xl font-bold">Usuarios</h1>
        <p>Contenido de Usuarios de la Aplicacion</p>
      </main>
    </div>
  );
}
