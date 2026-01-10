function ContactForm() {
  return (
    <form className="flex flex-col gap-4 bg-gray-400 w-96 p-10" action="">
      <h1 className="text-2xl">Fale conosco por e-mail!</h1>
      <div className="flex flex-row gap-3 w-full justify-between">
        <label htmlFor="">Seu nome</label>
        <input className="bg-white" type="text" value="" />
      </div>
      <div className="flex flex-row gap-3 justify-between">
        <label htmlFor="">Seu e-mail</label>
        <input className="bg-white" type="email" value="" />
      </div>
      <div className="flex flex-row gap-3 justify-between">
        <label htmlFor="">Seu Telefone</label>
        <input className="bg-white" type="tel" value="" />
      </div>
      <input className="bg-blue-800 p-1 rounded cursor-pointer" type="submit" value="Enviar" />
    </form>
  );
}

export default ContactForm;
