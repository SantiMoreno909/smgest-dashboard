import React from "react";
import Tarjetero from "../components/Tarjetero";
import { useProduct } from "../hooks/useProducts";
import { useUsers } from "../hooks/useUsers";

const Inicio = () => {
  const { count } = useProduct();
  const { totalUsers } = useUsers();

  const datos1 = [
    {
      color: "success",
      titulo: "Total de productos",
      valor: count,
      icono: "",
    },
    {
      color: "primary",
      titulo: "Total de usuarios",
      valor: totalUsers,
      icono: "",
    },
  ];

  return (
    <div className="sectionContainer">
      <h1>Dashboard de El Sendero Vinoteca - SMGest</h1>
      <div className="sectionContainer">
        <h3 className="mb-3">Totales del sistema</h3>
        <Tarjetero datos={datos1} />
      </div>
    </div>
  );
};

export default Inicio;
