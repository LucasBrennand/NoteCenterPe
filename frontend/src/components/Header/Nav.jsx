import { useState } from "react";
import Logo from "./Logo";
import NavUl from "./NavUl";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 transition-opacity duration-500 z-30 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: "84px" }}
        onClick={toggleMenu}
      />

      <nav className="flex w-full justify-between items-center text-white relative">
        <Logo />

        <button
          onClick={toggleMenu}
          className="text-white text-2xl z-50 md:hidden outline-none focus:ring-0"
        >
          <i
            className={`fa-solid ${
              isOpen ? "fa-xmark rotate-180" : "fa-bars"
            } transition-transform duration-500`}
          ></i>
        </button>

        <NavUl
          isOpen={isOpen}
          className={`
            absolute top-[calc(100%+28px)] left-0 w-full bg-blue-900 p-10 flex flex-col items-center gap-8 
            transition-all duration-500 ease-in-out origin-top z-40 shadow-2xl
            ${
              isOpen
                ? "opacity-100 scale-y-100 pointer-events-auto"
                : "opacity-0 scale-y-0 pointer-events-none md:opacity-100 md:scale-y-100"
            } 
            md:static md:flex-row md:bg-transparent md:p-0 md:w-auto md:pointer-events-auto md:scale-y-100 md:shadow-none
          `}
        />
      </nav>
    </>
  );
}

export default Nav;
