import "./Vantagem.css";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

function Vantagem() {
  return (
    <>
      <div className="vantagem">
        <div className="txtVantagem">
          <h3>
            Vantagens da energia solar que só a{" "}
            <span className="nameVantagem">Sunshine</span> porporciona{" "}
          </h3>
          <br />
        </div>

        <div>
          <Carousel fade>
            <Carousel.Item>
              <Card style={{ backgroundColor: '#00668C' }}>
                <Card.Body>
                  <Card.Title style={{ color: "#2CC464" }}>
                    Valoriza seu imóvel
                  </Card.Title>
                  <Card.Text style={{ color: "#ffff" }}>
                    Propriedades equipadas com Sistemas de Energia Solar
                    Fotovoltaica tendem a ter uma{" "}
                    <span style={{ fontWeight: "bold" }}>
                      valorização de aproximadamente 6% a 10% no imóvel.
                    </span>
                  </Card.Text>
                  <br />
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item>
              <Card style={{ backgroundColor: '#00668C' }}>
                <Card.Body>
                  <Card.Title style={{ color: "#2CC464" }}>Economia</Card.Title>
                  <Card.Text style={{ color: "#ffff" }}>
                    Gere sua própria energia e{" "}
                    <span style={{ fontWeight: "bold" }}>reduza os gastos</span>{" "}
                    na sua fatura de eletricidade. Mantenha-se resguardado
                    contra os possíveis aumentos nas tarifas.{" "}
                  </Card.Text>
                  <br />
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item>
              <Card style={{ backgroundColor: '#00668C' }}>
                <Card.Body>
                  <Card.Title style={{ color: "#2CC464" }}>
                    Sustentabilidade
                  </Card.Title>
                  <Card.Text style={{ color: "#ffff" }}>
                    A energia solar é uma fonte limpa e sustentável, não
                    produzindo emissões de gases poluentes e causando um impacto
                    ambiental mínimo.
                  </Card.Text>
                  <br />
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item>
              <Card style={{ backgroundColor: '#00668C' }}>
                <Card.Body>
                  <Card.Title style={{ color: "#2CC464" }}>
                    Monitoramento
                  </Card.Title>
                  <Card.Text style={{ color: "#ffff" }}>
                    Acompanhe a geração da sua energia pelo seu smartphone.
                  </Card.Text>
                  <br />
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item>
              <Card style={{ backgroundColor: '#00668C' }}>
                <Card.Body>
                  <Card.Title style={{ color: "#2CC464" }}>
                    Garantia e Qualidade
                  </Card.Title>
                  <Card.Text style={{ color: "#ffff" }}>
                    Contamos com uma{" "}
                    <span style={{ fontWeight: "bold" }}>
                      equipe experiente e altamente qualificada
                    </span>
                    para garantir serviços de excelência e uma vida útil
                    superior a 25 anos.
                  </Card.Text>
                  <br />
                </Card.Body>
              </Card>
            </Carousel.Item>

            <Carousel.Item>
              <Card style={{ backgroundColor: '#00668C' }}>
                <Card.Body>
                  <Card.Title style={{ color: "#2CC464" }}>
                    Projetos personalizados
                  </Card.Title>
                  <Card.Text style={{ color: "#ffff" }}>
                    Projetos voltados para atender a necessidade do cliente,
                    proporcionando
                    <span style={{ fontWeight: "bold" }}>
                      agilidade, segurança e qualidade.
                    </span>
                  </Card.Text>
                  <br />
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Vantagem;
