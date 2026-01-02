import Nav from "./Nav";
import Logo from "./Logo";
function Header() {
  return (
    <header className="flex flex-row relative top-0 justify-between w-full p-6 border-b-4 border-blue-600">
      <Logo/>
      <Nav/>
    </header>
  );
}
export default Header;
