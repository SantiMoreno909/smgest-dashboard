import React from "react";
import { useProduct } from "../hooks/useProducts";
import { Link } from "react-router-dom";

const Productos = () => {
  // Utiliza el hook useProduct para obtener los datos de los productos
  const { productos } = useProduct();

  return (
    <div className="sectionContainer">
      <h2>Listado de Productos</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Presentación</th>
            <th scope="col">ID Categoría</th>
            <th scope="col">ID Subcategoría</th>
            <th scope="col">ID Proveedor</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapea los productos y renderiza cada uno en una fila de la tabla */}
          {productos.map((producto) => (
            <tr key={producto.id}>
              <th scope="row">{producto.id}</th>
              <td>{producto.name}</td>
              <td>{producto.description}</td>
              <td>{producto.categoryId}</td>
              <td>{producto.subcategoryId}</td>
              <td>{producto.providerId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Productos;
