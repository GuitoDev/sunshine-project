import "./Servicos.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import { FaLightbulb } from "react-icons/fa6";
import { MdSolarPower } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { GiSolarPower } from "react-icons/gi";

function Servicos() {
  return (
    <>
      <div className="servicosInit">
        <div className="servicoTexto">
          <h5 className="servicosTitulo">Serviços</h5>
          <h3>
            O mundo oferece os recursos, nos apenas transformamos em energia{" "}
            <FaLightbulb color="yellow" size={30} />
          </h3>
        </div>
        <br />

        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/14613939/pexels-photo-14613939.jpeg?auto=compress&cs=tinysrgb&w=600"
              height={400}
            />
            <Card.Body>
              <Card.Title>
                <FaHome /> Residêncial, Comercial e Predial
              </Card.Title>
              <Card.Text>
                Torne sua residência, predio ou negócio energeticamente
                independente com soluções de energia solar.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <Button variant="primary">Saiba Mais</Button>
              </small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/9893729/pexels-photo-9893729.jpeg?auto=compress&cs=tinysrgb&w=600"
              height={400}
            />
            <Card.Body>
              <Card.Title>
                <MdSolarPower /> Usinas de Energia Solar
              </Card.Title>
              <br />
              <Card.Text>
                Usinas solares produzem energia renovável em alta escala,
                impulsionando um futuro mais limpo e acessível.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <Button variant="primary">Saiba Mais</Button>
              </small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/9799717/pexels-photo-9799717.jpeg?auto=compress&cs=tinysrgb&w=600"
              height={400}
            />
            <Card.Body>
              <Card.Title>
                <FaSun /> Estações de Energia Solar
              </Card.Title>
              <br />
              <Card.Text>
                Estações de energia solar é uma solução eficaz e sustentável
                para suprir necessidades energéticas em qualquer local.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <Button variant="primary">Saiba Mais</Button>
              </small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/6147478/pexels-photo-6147478.jpeg?auto=compress&cs=tinysrgb&w=600"
              height={400}
            />
            <Card.Body>
              <Card.Title>
                <GiSolarPower /> Energia Rural
              </Card.Title>
              <br />
              <Card.Text>
                Energia solar para áreas rurais: potencializando a independência
                energética e impulsionando o desenvolvimento sustentável em
                regiões afastadas.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                <Button variant="primary">Saiba Mais</Button>
              </small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </>
  );
}

export default Servicos;
