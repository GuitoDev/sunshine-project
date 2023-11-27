import "./Home.css";
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <>
     <Carousel>
      <Carousel.Item>
        <img className="imgCarrosel" src="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1600"></img>
        <Carousel.Caption>
          <h3>Instalação rápida e eficiênte</h3>
          <p>Monstamos 100m quadrados em 2 horas.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="imgCarrosel" src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        <Carousel.Caption>
          <h3>Segurança e Confiança</h3>
          <p>Avaliada em 4.7 estrelas em segurança pelo IMETRO</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="imgCarrosel" src="https://images.pexels.com/photos/6601008/pexels-photo-6601008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        <Carousel.Caption>
          <h3>Sustentabilidade</h3>
          <p>Energia limpa e renovavel fazendo bem pelo meio ambiente.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </>
  );
}

export default Home;
