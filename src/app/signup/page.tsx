import { Metadata } from "next";
import { BgMaintenance, ClrLogo } from "../components/shared/images";

export const metadata: Metadata = {
  title: "Página en Contrucción",
};

export default function SignUpPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <BgMaintenance />
      <ClrLogo />
      <h2 className="mt-6 max-w-[600px] text-5xl md:text-3xl sm:text-xl text-gray-300 text-center">
        Página en Construcción...
      </h2>
      <p className="text-sm text-white py-6">
        © {new Date().getFullYear()} Casa La Romana. Todos los derechos
        reservados.
      </p>
    </main>
  );
}
