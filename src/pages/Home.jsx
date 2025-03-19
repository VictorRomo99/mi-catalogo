import { Link } from "react-router-dom";
import "./home.css"; // Asegúrate de actualizar los estilos en home.css

function Home() {
  return (
    <div className="home-container">
      {/* Encabezado con fondo degradado y texto estilizado */}
      <header className="header">
        <h1 className="store-name">Roger PC Store</h1>
        <div className="top-links">
          <Link to="/productos#componentes-pc" className="btn">
            Componentes de PC
          </Link>
          <Link to="/productos#computadoras" className="btn">
            Computadoras
          </Link>
          <Link to="/productos#laptops" className="btn">
            Laptops
          </Link>
          <Link to="/productos#celulares" className="btn">
            Celulares
          </Link>
          <Link to="/productos#tv" className="btn">
            TV
          </Link>
          <Link to="/productos#parlantes" className="btn">
            Parlantes
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Home;
