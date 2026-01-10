import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section className="text-white flex flex-col items-center">
      <div>
        <h1 className="text-4xl">Quer entrar em contato?</h1>
      </div>

      <ContactForm/>
    </section>
  );
}

export default Contact;
