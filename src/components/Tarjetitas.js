import React from "react";

function Tarjetitas(props) {
  return (
    <React.Fragment>
      <div className="col-md-6 mb-4 tarjetita">
        <div className={`card border-left-${props.color} shadow h-100 py-2`}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div
                  className={`text-xs font-weight-bold text-${props.color} text-uppercase mb-1`}
                >
                  {" "}
                  {props.titulo}
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {props.moneda ? "$" + props.valor : props.valor}
                </div>
              </div>
              <div className="col-auto">
                <i className={`fas ${props.icono} fa-2x text-gray-300`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Tarjetitas;
