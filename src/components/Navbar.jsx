import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>LazosPeludos</h2>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Adopciones</a></li>
        <li><a href="#">Voluntariado</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
