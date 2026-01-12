import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
import Help from "./components/Help";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <Introduction/>
      <About/>
      {/* <Help/>
      <Services/>
      <Contact/> */}
      <Footer/>
    </>
  );
}

export default App;
