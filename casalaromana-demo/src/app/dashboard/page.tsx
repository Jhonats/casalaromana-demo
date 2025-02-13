import React from "react";
import Sidenav from "../components/dashboard/Sidenav";

export default function DashboardPage() {
  return (
    <div className="flex">
      <main className="flex-grow p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Contenido Principal de la aplicación</p>
      </main>
    </div>
  );
}
