function Introduction() {
  return (
    <section className="relative w-full h-130 md:h-120 overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover w-dvw bg-center blur-sm scale-105"
        style={{
          backgroundImage: "url('/technology.webp')",
        }}
      />
      <div className="relative flex flex-col gap-5 h-full justify-center ">
        <h1 className="text-5xl text-center md:text-left md:text-6xl text-blue-400">
          Estamos Aqui Para Ajudar
        </h1>
        <p className="text-justify md:text-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
          nesciunt. Suscipit delectus architecto deleniti amet reiciendis,
          alias, cumque dolor explicabo assumenda quaerat quibusdam enim
          doloremque ab a, eos consequatur aspernatur velit? Vero cum deserunt
          dicta tenetur sequi iure, dolor, aut voluptatum culpa quam eos
          consectetur repellat, numquam accusamus voluptates iste magni
          asperiores consequatur omnis mollitia sed. Fuga voluptatem mollitia
          itaque.
        </p>
        <button className=" self-center md:self-start bg-blue-700 rounded p-2 shadow cursor-pointer hover:scale-125 duration-500">
          Saiba Mais
        </button>
      </div>
    </section>
  );
}

export default Introduction;
