import React, { useEffect, useState } from "react";

export const UltimoProducto = () => {


    const [products, setproducts] = useState([]);

    useEffect(() => {
        // Petición Asincrónica al montarse el componente
        const endpointProducts = "http://localhost:3002/api/products/5";
        fetch(endpointProducts)
          .then((response) => response.json())
          .then((data) => setproducts(data.data))
          .catch((error) => console.log(error));
      }, []);
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
                  {products.title}
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
