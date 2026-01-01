function Nav() {
  return (
    <nav className="flex flex-row text-white">
      <ul className="flex flex-row bg-transparent gap-6">
        <li>
          <a
            className="bg-transparent hover:text-amber-200 duration-200 hover:text-2xl"
            href=""
          >
            Sobre Nós
          </a>
        </li>
        <li>
          <a className="bg-transparent" href="">
            Serviços
          </a>
        </li>
        <li>
          <a className="bg-transparent" href="">
            Produtos
          </a>
        </li>
        <li>
          <a className="bg-transparent" href="">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
