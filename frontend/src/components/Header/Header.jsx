import Nav from "./Nav";
import Logo from "./Logo";
function Header() {
  return (
    <header className="flex justify-between items-center md:flex-row relative top-0 w-full p-6 border-b-4 border-blue-600">
      <Nav/>
    </header>
  );
}
export default Header;
