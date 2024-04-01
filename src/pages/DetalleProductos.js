import React from "react";
import { useParams } from "react-router-dom"; // Importa useParams para obtener el ID de la URL
import { useProduct } from "../hooks/useProducts";

const DetalleProductos = () => {
  // Utiliza el hook useProduct para obtener los datos de los productos
  const { productos } = useProduct();
  const { id } = useParams(); // Obtiene el ID de la URL

  // Filtra el producto con el ID que coincide con el ID de la URL
  const productoSeleccionado = productos.find((producto) => producto.id == id);

  // Si no se encuentra ningún producto con el ID dado, muestra un mensaje de error
  if (!productoSeleccionado) {
    return <div>No se encontró el producto</div>;
  }

  return (
    <div className="sectionContainer">
      <h2>Detalles del Producto</h2>
      <form
        action="/usuarios/guardarUsuario"
        method="POST"
        enctype="multipart/form-data"
      >
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Presentación</th>
              <th scope="col">Categoría</th>
              <th scope="col">Subcategoría</th>
              <th scope="col">Proveedor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  name="nombre"
                  value={productoSeleccionado.name}
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  name="precio"
                  value={productoSeleccionado.price}
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  name="presentacion"
                  value={productoSeleccionado.description}
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  name="categoria"
                  value={productoSeleccionado.category}
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  name="subcategoria"
                  value={productoSeleccionado.subcategory}
                ></input>
              </td>
              <td>
                <input
                  type="text"
                  name="proveedor"
                  value={productoSeleccionado.provider}
                ></input>
              </td>
            </tr>
          </tbody>
        </table>
        <input type="submit" name="submit" value="Guardar cambios"></input>
      </form>
    </div>
  );
};

export default DetalleProductos;
