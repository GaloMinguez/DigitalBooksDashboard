import React, { useEffect, useState } from "react";

export const UltimoProducto = () => {


    const [products, setproducts] = useState([]);

    useEffect(() => {
        // Petición Asincrónica al montarse el componente
        const endpointUsers = "http://localhost:3000/api/products";
        fetch(endpointUsers)
          .then((response) => response.json())
          .then((data) => setproducts(data.ultimoProducto))
          .catch((error) => console.log(error));
      }, []);

      console.log(products)
  return (
    <>
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Ultimo Producto
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 mb-4 card-header py-3 m-0 font-weight-bold text-gray-800 centrado">
                <span>Nombre Completo: </span>
                <span>
                  {products.name}
                </span>
                <p>Descripcion: {products.description}</p>
                <p>Precio: {products.price}</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
