import { UserCircleIcon } from "@heroicons/react/24/solid";

const recentRequests = [
  {
    name: "Olivia Martínez",
    company: "Café Delicioso",
    date: "2023-06-15",
  },
  {
    name: "Carlos Rodríguez",
    company: "Tienda de Electrónicos CR",
    date: "2023-06-14",
  },
  {
    name: "Ana García",
    company: "Panadería El Sabor",
    date: "2023-06-13",
  },
  {
    name: "Miguel López",
    company: "Ferretería López",
    date: "2023-06-12",
  },
  {
    name: "Laura Sánchez",
    company: "Boutique Elegancia",
    date: "2023-06-11",
  },
];

export function RecentRequests() {
  return (
    <div className="space-y-8">
      {recentRequests.map((request) => (
        <div key={request.company} className="flex items-center">
          <UserCircleIcon className="h-9 w-9 text-gray-400" />
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{request.name}</p>
            <p className="text-sm text-muted-foreground">{request.company}</p>
          </div>
          <div className="ml-auto font-medium">{request.date}</div>
        </div>
      ))}
    </div>
  );
}
