import "./Sobre.css";
import { FaWhatsapp } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Sobre() {
  return (
    <>
      <CardGroup>
        <Card border="0">
          <Card.Body>
            <Card.Title className="tituloSobre">
            <h5 className="sobreTitulo">Sobre</h5>
              Escolha a eletricidade solar como fonte de energia limpa.
            </Card.Title>
            <br />
            <Card.Text>
              Bem-vindo à Sunshine, sua fonte confiável de energia sustentável,
              oferecendo soluções inovadoras, tecnologias verdes e serviços
              premium. Com nosso compromisso com o meio ambiente, garantimos
              eficiência, confiabilidade e um futuro mais limpo para gerações
              vindouras. Trabalhamos incansavelmente para promover a transição
              para uma energia renovável, contribuindo para um planeta mais
              saudável.
              <br />
              <br />
              <p>
                <a href="#">
                  <button className="bntWppSobre">
                    <FaWhatsapp size={30} color="black" />
                  </button>
                </a>{" "}
                Dúvidas? Ligue para nós
              </p>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="0">
          <Card.Body>
            <Card.Text className="text-center">
            <iframe
              className="videoSobre"
              src="https://www.youtube.com/embed/CVZQHxa7r3M?si=16qc_QGP3byTO2dW"
              title="Título do Vídeo"
              
              allowFullScreen
            ></iframe>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}

export default Sobre;
