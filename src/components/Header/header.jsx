import "./Header.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <>
      <div className="infosTop">
        <h6>
          <img
            className="imgTop"
            width="30"
            height="30"
            src="https://img.icons8.com/fluency/48/000000/maps.png"
            alt="maps"
          />
          770 East Linden Street New York
        </h6>

        <div className="btnHome">
          <a>
            <button className="socialBtn instagram">
              <FaInstagram />
            </button>
          </a>
          <a>
            <button className="socialBtn facebook">
              <FaFacebookSquare />
            </button>
          </a>
          <a>
            <button className="socialBtn youtube">
              <FaYoutube/>
            </button>
          </a>
          <a>
            <button className="socialBtn linkedin">
              <FaLinkedin/>
            </button>
          </a>
        </div>
      </div>

      <Navbar expand="lg" sticky="top" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="https://img.icons8.com/color/48/solar-energy.png"
              width="60"
              height="60"
            ></img>
            Sunshine Energy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 d-flex mx-auto"
              style={{
                maxHeight: "100px",
              }}
              navbarScroll
            >
              <ul className="ulNavbar">
              <li><a href="#">Home</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Serviços</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
            </Nav>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Ex: Painel Solar"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 50 50"
                >
                  <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
                </svg>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
