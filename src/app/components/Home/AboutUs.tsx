import Image from "next/image";
// import { motion} from "framer-motion";

export default function AboutUs() {
  return (
    <section id="about-us" className="bg-gray-50 py-16 relative">
      <div className="p-4">
        <h1 className="mb-8 text-center text-4xl font-bold">Quienes Somos</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 p-4">
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
          <div className="relative h-[300px] overflow-hidden rounded-lg">
            <Image
              src="/images/background.jpg"
              alt="Acerca de Nosotros"
              className="h-full w-full object-cover"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}
