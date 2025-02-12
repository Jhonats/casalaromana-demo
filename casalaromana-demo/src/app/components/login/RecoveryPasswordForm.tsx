import { AtSymbolIcon } from "@heroicons/react/20/solid";
export default function RecoveryPasswordForm() {
  return (
    <form className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-200 px-6 pb-4 pt-8">
        <h2 className="mb-3 text-2xl text-black text-center">
          Recuperar Contraseña
        </h2>
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
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm text-black outline-2 placeholder:text-gray-500 bg-white"
                id="email"
                type="email"
                name="email"
                placeholder="Ingrese su correo electrónico"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-7 w-full justify-center bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-500 "
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
