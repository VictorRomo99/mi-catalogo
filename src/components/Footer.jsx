import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a
          href="https://www.facebook.com/roger.carpiomedina"
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: "none" }} // 🔹 Quita cualquier fondo
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.instagram.com/roger_pc7"
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: "none" }}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.tiktok.com/@roger_pc_official"
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: "none" }}
        >
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a
          href="https://wa.me/934032635"
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: "none" }}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
      <p>© 2025 Roger PC Store. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
