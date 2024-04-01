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
            <th scope="col">Precio</th>
            <th scope="col">Presentación</th>
            <th scope="col">Categoría</th>
            <th scope="col">Subcategoría</th>
            <th scope="col">Proveedor</th>
            <th scope="col">Detalles</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapea los productos y renderiza cada uno en una fila de la tabla */}
          {productos.map((producto) => (
            <tr key={producto.id}>
              <th scope="row">{producto.id}</th>
              <td>{producto.name}</td>
              <td>${producto.price}</td>
              <td>{producto.description}</td>
              <td>{producto.category}</td>
              <td>{producto.subcategory}</td>
              <td>{producto.provider}</td>
              <td>
                <Link
                  className="textoNegro btn btn-dark"
                  to={`/productos/${producto.id}`}
                >
                  Ver detalles
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Productos;
