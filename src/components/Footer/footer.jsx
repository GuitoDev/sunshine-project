import "./Footer.css";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";

function Footer() {
  return (
    <>
      <footer className="footer-section">
        <div className="container" style={{ color: "#ffff" }}>
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-logo">
                <p style={{ color: "#FFD700" }}>
                  Sunshine Energy <AiFillThunderbolt />
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <h3>Links</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Produto</a>
                </li>
                <li>
                  <a href="#">Sobre</a>
                </li>
                <li>
                  <a href="#">Portfólio</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h3>Contatos</h3>
              <p>email@ficticio.com.br</p>
              <p>Tel: (99) 9999-9999</p>
              <p>Das 8h às 18h, Seg á Sab</p>
              <p>770 East Linden Street New York</p>
              <p>Brasília - DF CEP 00000-000</p>
            </div>
            <div className="col-lg-3">
              <h3>Redes Sociais</h3>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fab fa-instagram">
                      <FaInstagram />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube">
                      <FaYoutube />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook">
                      <FaFacebook />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin">
                      <FaLinkedin />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="marcaAgua">
        <p>
          © 2023 Todos os Direitos Reservados Sunshine Energy. Desenvolvido por{" "}
          <a href="https://portifolio-z2kk.vercel.app/" target="_blank" rel="noreferrer">
            <img
              className="logoGuito"
              src="https://i.imgur.com/MldCmf7.png"
              alt="Logo"
            />
          </a>
        </p>
      </div>
    </>
  );
}

export default Footer;
