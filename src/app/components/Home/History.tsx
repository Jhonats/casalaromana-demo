export default function History() {
  return (
    <section id="history" className="bg-gray-50 py-16">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Nuestra Historia
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative h-[300px] overflow-hidden rounded-lg pl-4">
            <img
              src="/images/history/history.jpg"
              alt="Our History"
              className="h-full w-full object-cover"
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
