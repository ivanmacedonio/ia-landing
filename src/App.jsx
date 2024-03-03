import { useEffect, useState } from "react";
import wp from "../src/assets/wp.svg";
import "./App.css";
import { Loader } from "./components/Loader";
import { About } from "./pages/About";
import { Bixo } from "./pages/Bixo";
import { Contact } from "./pages/Contact";
import { Portfolio } from "./pages/Portfolio";
import { Testimonios } from "./pages/Testimonios";
import { Titles } from "./pages/Titles";
function App() {
  function handleWhatsAppClick() {
    const number = "+541131999440";
    const message =
      "¡Hola! ¿Cómo estás? Estoy buscando un video con IA. ¿Podrías ayudarme con eso?";
    window.open(`https://wa.me/${number}?text=${message}`, "_blank");
  }

  const [classname, setClass] = useState("no-scroll");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setClass("scrollclass")
      setLoading(false);
    }, 8000);
  }, []);
  return (
    <>
      <div className="wp">
        <img src={wp} alt="" onClick={handleWhatsAppClick} />
      </div>
      {loading ? <Loader /> : ""}
      <div className={classname}>
        <Titles></Titles>
        <About></About>
        <Testimonios></Testimonios>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Bixo></Bixo>
      </div>
    </>
  );
}

export default App;
