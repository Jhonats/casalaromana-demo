import { CommerceTable } from "@/app/components/Dashboard/commerce/CommerceTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comercios",
  description: "Página de Comercios de la aplicación",
};

export default function CommercePage() {
  return (
    <div className="w-full p-6">
      <h1 className="text-2xl font-bold tracking-tight mb-4">Comercios</h1>
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <MagnifyingGlassIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar Comercio" className="pl-8" />
        </div>
        <Button className="bg-gray-800 hover:bg-gray-700">
          <PlusIcon className="mr-2 h-4 w-4" />
          Agregar Comercio
        </Button>
      </div>
      <CommerceTable />
    </div>
  );
}
