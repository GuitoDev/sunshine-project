import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css"
import { GoAlertFill } from "react-icons/go";
import { useState, useEffect } from "react"; 
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import Sobre from "./components/Sobre/sobre";
import Servicos from "./components/Servicos/servicos";
import Vantagem from "./components/Vantangem/vantagem";
import Footer from "./components/Footer/footer";
import Map from "./components/Map/map";
import Contato from "./components/Contato/contato";

function App() {
  const [loading, setLoading] = useState(true); //loading

  useEffect(() => {
    // Simula um atraso de 4 segundos antes de desativar o loader
    setTimeout(() => {
      setLoading(false); // Desativa o loader após 4 segundos
    }, 4000);
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <div className="loader animate__fadeInLeftBig">
            <h1><GoAlertFill /> Este site é apenas de cunho demonstrativo!</h1>
            <p>Para saber mais clique na minha logo no footer <br />  
              <img
              className="logoGuito"
              src="https://i.imgur.com/MldCmf7.png"
              alt="Logo"
            />
            </p>
          </div>
        ) : (
          <div className="content">
            <Header />
            <Home />
            <Sobre />
            <Vantagem />
            <Servicos />
            <Contato />
            <Map />
            <Footer />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
