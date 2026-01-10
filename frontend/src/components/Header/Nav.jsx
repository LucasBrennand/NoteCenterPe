import { useState } from "react";
import Logo from "./Logo";
import NavUl from "./NavUl";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex w-full justify-around  items-center text-white">
      <Logo />
      <button
        onClick={toggleMenu}
        className="text-white text-2xl z-50 md:hidden transition-transform duration-300 active:scale-90"
      >
        <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </button>

      <NavUl
        className={`
          absolute top-21 left-0 w-full bg-blue-900 p-6 flex flex-col items-center gap-6 
          transition-all duration-300 ease-in-out origin-top z-40
          ${
            isOpen
              ? "opacity-100 scale-y-100 pointer-events-auto"
              : "opacity-0 scale-y-0 pointer-events-none md:opacity-100 md:scale-y-100"
          } 
          md:static md:flex-row md:bg-transparent md:p-0 md:w-auto md:pointer-events-auto
        `}
      />
    </nav>
  );
}

export default Nav;
