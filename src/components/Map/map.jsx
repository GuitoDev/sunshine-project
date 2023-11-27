import "./Map.css";

function Map() {
  return (
    <>
      <div className="mapBox">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4379.951303311593!2d-46.60966928112354!3d-23.58322793679167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1651105282919!5m2!1spt-BR!2sbr"
        style={{ border: '0' }} // Estilos agora são definidos como um objeto JavaScript
        allowFullScreen // Propriedade booleana pode ser definida sem valor
        loading="lazy" // Valor da propriedade loading deve ser uma string
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa da localização da loja" // Inclua um título para acessibilidade
      ></iframe>
    </div>
    </>
  );
}

export default Map;
