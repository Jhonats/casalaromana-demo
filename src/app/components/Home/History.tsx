import Image from "next/image";

export default function History() {
  return (
    <section id="history" className="bg-gray-50 py-16 relative">
      <div className="p-4">
        <h2 className="mb-8 text-center text-4xl font-bold">
          Nuestra Historia
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative h-[300px] overflow-hidden rounded-lg p-4">
            {/* History Background */}
            <Image
              src="/images/history/history.jpg"
              alt="Nuestra Historia"
              className="h-full w-full object-cover"
              fill
            />
          </div>
          <div className="space-y-4">
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
