import React from "react";
import { useUsers } from "../hooks/useUsers";
import { Link } from "react-router-dom";

const Usuarios = () => {
  // Utiliza el hook useProduct para obtener los datos de los productos
  const { usuarios } = useUsers();

  return (
    <div className="sectionContainer">
      <h2>Listado de Usuarios</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre y Apellido</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Rol</th>
          </tr>
        </thead>
        <tbody>
          {/* Mapea los productos y renderiza cada uno en una fila de la tabla */}
          {usuarios.map((usuario) => (
            <tr key={usuario.UsuarioID}>
              <th scope="row">{usuario.id}</th>
              <td>{usuario.name}</td>
              <td>{usuario.username}</td>
              <td>{usuario.email}</td>
              <td>{usuario.telefono}</td>
              <td>{usuario.rol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Usuarios;
