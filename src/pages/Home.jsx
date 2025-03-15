import { Link } from "react-router-dom";
import "./Home.css"; // Archivo CSS para mejorar el diseño

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Bienvenido a Mi Catálogo</h1>
        <p>Explora nuestros productos electrónicos al mejor precio.</p>
      </header>

      <section className="secciones">
        <h2>Nuestras Categorías</h2>
        <div className="categorias">
          <Link to="/productos#computadoras">💻 Computadoras</Link>
          <Link to="/productos#accesorios">🎧 Accesorios</Link>
          <Link to="/productos#laptops">💼 Laptops</Link>
          <Link to="/productos#celulares">📱 Celulares</Link>
          <Link to="/productos#parlantes">🔊 Parlantes</Link>
        </div>
      </section>

      <footer>
        <h3>Síguenos en nuestras redes</h3>
        <div className="redes">
          <a href="https://facebook.com" target="_blank">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank">
            Instagram
          </a>
          <a href="https://wa.me/123456789" target="_blank">
            WhatsApp
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
