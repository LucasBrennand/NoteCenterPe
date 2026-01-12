function NavUl({ className, isOpen }) {
  const items = ["Sobre Nós", "Serviços", "Produtos", "Contato"];
  
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li 
          key={item}
          className={`transition-all duration-500 ease-out transform
            ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 md:opacity-100 md:translate-y-0"}
          `}
          style={{ 
            transitionDelay: isOpen ? `${(index + 1) * 100}ms` : "0ms" 
          }}
        >
          <a className="hover:text-blue-300 text-xl md:text-base duration-300 block font-medium" href="#">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}
export default NavUl;
