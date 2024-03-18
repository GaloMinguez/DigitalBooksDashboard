import React, { useEffect, useState } from "react";

export const UltimoProducto = () => {


  const [products, setproducts] = useState([]);

  useEffect(() => {
    // Petición Asincrónica al montarse el componente
    const endpointProducts = "http://localhost:3002/api/products/lastproduct";
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
            <h6 className="m-0 font-weight-bold title-sp">Último producto en la Base de Datos</h6>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: '15rem' }}
                src="http://localhost:3002/img/default.png"
                alt="imagen de usuario" />
            </div>
            <h6 className="title-sp">Nombre del producto:</h6>
            <p>{products.title}</p>
            <h6 className="title-sp">Descripción del producto:</h6>
            <p>{products.description}
            {products.publisher}</p>
            <h6 className="title-sp">Precio del producto:</h6>
            <p>
              {products.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
