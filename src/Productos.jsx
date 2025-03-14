// 📌 Importamos imágenes desde src/assets/img/
import ramImg from "../assets/img/ram.jpg.webp";
import graficaImg from "../assets/img/grafica.jpg";
import ryzenImg from "../assets/img/ryzen5600x.jpg";

const productos = [
  {
    id: 1,
    nombre: "Memoria RAM 16GB",
    precio: "$80",
    imagen: ramImg, // ✅ Usamos la imagen importada
    enlace: "https://wa.me/1234567890",
  },
  {
    id: 2,
    nombre: "Tarjeta de Video RTX 3060",
    precio: "$400",
    imagen: graficaImg,
    enlace: "https://wa.me/1234567890",
  },
  {
    id: 3,
    nombre: "Procesador Ryzen 5 5600X",
    precio: "$200",
    imagen: ryzenImg,
    enlace: "https://wa.me/1234567890",
  },
];

function Productos() {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} width="200px" />
            <h3>{producto.nombre}</h3>
            <p>Precio: {producto.precio}</p>
            <a href={producto.enlace} target="_blank" rel="noopener noreferrer">
              📲 Contactar por WhatsApp
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;
