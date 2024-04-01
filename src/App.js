import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import DetalleProductos from "./pages/DetalleProductos";
import Categorias from "./pages/Categorias";
import Usuarios from "./pages/Usuarios";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/:id" element={<DetalleProductos />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/usuarios" element={<Usuarios />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
