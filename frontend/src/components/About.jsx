function About() {
  return (
    <section className="relative w-full h-56 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center blur-sm scale-105 transform"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20230526/pngtree-computer-store-with-many-computers-and-displays-image_2640586.jpg')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-white text-3xl font-bold">
          About
        </h1>
      </div>
    </section>
  );
}

export default About;
