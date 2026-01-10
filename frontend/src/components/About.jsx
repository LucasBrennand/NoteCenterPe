function About() {
  return (
    <section className="relative w-full h-96 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
        style={{
          backgroundImage: "url('/technology.webp')",
        }}
      />

      <div className="relative z-10 flex h-full items-center justify-evenly px-10 w-f">
        <div className="flex flex-col gap-4 max-w-md">
          <h1 className="text-white text-3xl font-bold">
            Precisa de ajuda com sua máquina?
          </h1>
          <button className="border-2 border-white cursor-pointer text-white px-6 py-2 hover:bg-white hover:text-black transition">
            Saiba mais
          </button>
        </div>

        <img
          src="/laptop_image.png"
          alt="Laptop"
          className="h-64 object-contain"
        />
      </div>
    </section>
  );
}

export default About;
