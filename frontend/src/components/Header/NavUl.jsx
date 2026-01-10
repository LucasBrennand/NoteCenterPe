function NavUl({className}) {
  return (
    <ul className={className}>
      <li>
        <a
          className="hover:border-b-2 hover:border-blue-300 hover:left-2 duration-75"
          href="#">
          Sobre Nós
        </a>
      </li>
      <li>
        <a href="#">Serviços</a>
      </li>
      <li>
        <a href="#">Produtos</a>
      </li>
      <li>
        <a href="#">Contato</a>
      </li>
    </ul>
  );
}
export default NavUl;
