const productos = [
  {
    id: 1,
    nombre: "Memoria RAM 16GB",
    precio: "$80",
    imagen: "/img/ram.jpg.webp", // Ruta directa a public/
    enlace: "https://wa.me/934032635",
  },
  {
    id: 2,
    nombre: "Tarjeta de Video RTX 3060",
    precio: "$400",
    imagen: "/img/grafica.jpg",
    enlace: "https://wa.me/934032635",
  },
  {
    id: 3,
    nombre: "Procesador Ryzen 5 5600X",
    precio: "$200",
    imagen: "/img/ryzen.jpg",
    enlace: "https://wa.me/934032635",
  },
];

function Productos() {
  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <h3>{producto.nombre}</h3>
            <p>Precio: {producto.precio}</p>
            <img src={producto.imagen} alt={producto.nombre} width="150" />
            <br />
            <a href={producto.enlace} target="_blank" rel="noopener noreferrer">
              Comprar en WhatsApp
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Productos;
