import React from "react";

export const CategoriasProducts = (props) => {

    //| Cantidad: {props.cant_prod}

  return (
    <>
      <div className="col-lg-6 mb-4">
        <div className="card bg-dark text-white shadow">
          <div className="card-body">{props.genero.name}</div>
        </div>
      </div>
    </>
  );
};
