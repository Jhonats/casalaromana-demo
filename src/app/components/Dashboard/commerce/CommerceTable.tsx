"use client";

import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const dummyData = [
  { id: 1, nombre: "Tienda A", usuario: "usuario1", estatus: "Activo" },
  { id: 2, nombre: "Restaurante B", usuario: "usuario2", estatus: "Inactivo" },
  { id: 3, nombre: "Café C", usuario: "usuario3", estatus: "Eliminado" },
  { id: 4, nombre: "Boutique D", usuario: "usuario4", estatus: "Activo" },
  { id: 5, nombre: "Farmacia E", usuario: "usuario5", estatus: "Activo" },
];

export function CommerceTable() {
  return (
    <div className="mt-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Imagen</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Usuario Asociado</TableHead>
            <TableHead>Estatus</TableHead>
            <TableHead className="text-center">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyData.map((comercio) => (
            <TableRow key={comercio.id}>
              <TableCell>
                <UserCircleIcon className="h-10 w-10 text-gray-400" />
              </TableCell>
              <TableCell>{comercio.nombre}</TableCell>
              <TableCell>{comercio.usuario}</TableCell>
              <TableCell>{comercio.estatus}</TableCell>
              <TableCell className="text-center">
                <Button
                  variant="ghost"
                  size="icon"
                  title="Ver"
                  className="hover:text-green-500 transition-colors"
                >
                  <EyeIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  title="Editar"
                  className="hover:text-yellow-500 transition-colors"
                >
                  <PencilIcon className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  title="Eliminar"
                  className="hover:text-red-500 transition-colors"
                >
                  <TrashIcon className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-20">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
