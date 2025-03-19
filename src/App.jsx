import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Footer from "./components/Footer"; // Asegúrate de tenerlo bien ubicado

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
