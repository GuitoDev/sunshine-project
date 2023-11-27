import "./Contato.css";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Parabéns!</Popover.Header>
    <Popover.Body>
      Mensagem enviada para a equipe da <strong>Sunshine</strong> com sucesso.
    </Popover.Body>
  </Popover>
);

function Contato() {
  return (
    <>
      <section className="contatos">
        <div className="container">
          <h1 className="titulo">Como posso te ajudar?</h1>
          <p>
            Entre em contato para te ajudar a esclarecer suas ideias e marcar
            uma reunião.
          </p>

          <form className="form">
            <input
              className="input"
              type="text"
              placeholder="Digite seu nome"
            />

            <input
              className="input"
              type="text"
              placeholder="Digite seu email"
            />

            <textarea
              className="textarea"
              placeholder="Digite sua mensagem..."
            />

            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <Button variant="success">Enviar</Button>
            </OverlayTrigger>
          </form>
        </div>
      </section>
      <br />
      <br />
    </>
  );
}

export default Contato;
