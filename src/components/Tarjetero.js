import React from "react";
import Tarjetita from "./Tarjetitas";
import * as FaIcons from "react-icons/fa";

function Tarjetero(props) {
  return (
    <div className="row">
      {props.datos.map((dato, index) => (
        <Tarjetita
          key={index} // Asegura que cada tarjeta tenga una clave única
          color={dato.color}
          titulo={dato.titulo}
          valor={dato.valor}
          moneda={dato.moneda}
          icono={dato.icono}
        />
      ))}
    </div>
  );
}

export default Tarjetero;
