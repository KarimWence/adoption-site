import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Encuentra a tu mejor amigo</h1>
        <p>
          Únete a nuestra misión: dar un hogar a perros y gatos rescatados.
          Adopta, salva una vida y gana un compañero fiel para siempre.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Adoptar ahora</button>
          <button className="btn-secondary">Saber más</button>
        </div>
      </div>
      <img src="https://www.enter.co/wp-content/uploads/2021/09/group-portrait-adorable-puppies-768x432.jpg" alt="Perro adorable" />
    </section>
  );
}

export default Hero;
