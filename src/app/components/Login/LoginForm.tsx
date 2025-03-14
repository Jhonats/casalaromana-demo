import { UserIcon, KeyIcon } from "@heroicons/react/20/solid";
import { lusitana } from "@/app/components/shared/fonts";
import Link from "next/link";

export default function LoginForm() {
  return (
    <form className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-200 px-6 pb-4 pt-8">
        <h1
          className={`${lusitana.className}mb-3 text-2xl text-black text-center`}
        >
          Inicio de Sesión
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-m font-medium text-black"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className={`peer block w-full rounded-md border py-[9px] pl-10 text-sm text-black outline-2 placeholder:text-gray-500 
                  `}
                id="email"
                type="email"
                name="email"
                placeholder="Ingrese su correo electrónico"
              />
              <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          {/* Password Input */}
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-m font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className={`peer block w-full rounded-md border py-[9px] pl-10 text-sm text-black outline-2 placeholder:text-gray-500 
                  `}
                id="password"
                type="password"
                name="password"
                placeholder="Ingrese su contraseña"
                minLength={8}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <div className="mt-2 text-right">
          <Link
            href="/recoverypassword" // Ruta a la página de recuperación de contraseña
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
            target="_self"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <Link href="/signup">
          <button className="flex h-10 mt-7 w-full justify-center items-center rounded-lg bg-gray-800 px-4 text-xl font-medium text-white transition-colors hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-gray-500 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
            Ingresar
          </button>
        </Link>
      </div>
    </form>
  );
}
