import React from "react";
import { useProduct } from "../hooks/useProducts";
import { Link } from "react-router-dom";

const Categorias = () => {
  // Utiliza el hook useProduct para obtener los datos de los productos
  const { productsByCategory, categoryCount } = useProduct();

  return (
    <div className="sectionContainer">
      <h2>Listado de Productos</h2>
      <p>Total de categorías: {categoryCount}</p>
      {Object.entries(productsByCategory).map(([categoryId, productos]) => (
        <div key={categoryId}>
          <h3>Categoría: {categoryId}</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Presentación</th>
                <th scope="col">Categoría</th>
                <th scope="col">Subcategoría</th>
                <th scope="col">Proveedor</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => (
                <tr key={producto.id}>
                  <th scope="row">{producto.id}</th>
                  <td>{producto.name}</td>
                  <td>{producto.description}</td>
                  <td>{producto.category}</td>
                  <td>{producto.subcategory}</td>
                  <td>{producto.provider}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Categorias;
