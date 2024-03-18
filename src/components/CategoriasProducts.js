import React from "react";

export const CategoriasProducts = (props) => {

  return (
    <>
      <div className="col-lg-6 mb-4">
        <div className="card bg-gradient-warning text-white shadow">
          <div className="card-body">
            <p>{props.name}</p>
            <p>Productos: {props.total_productos}</p>
            </div>
        </div>
      </div>
    </>
  );
};
