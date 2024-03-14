import React from "react";
import { useState, useEffect } from "react";
import ChartRow from "./ChartRow";

function Chart() {
  const [products, setProducts] = useState([]);

  // traer las api products
  useEffect(() => {
    // Petición Asincrónica al montarse el componente
    const endpointProducts = "http://localhost:3002/api/products";
    fetch(endpointProducts)
      .then((response) => response.json())
      .then((data) => {setProducts(data.data)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">
          <div className="card shadow mb-4">
            <div className="card-body">
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing="0"
                >
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Descripcion</th>
                      <th>Precio Unitario</th>
                      <th>Genero</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Nombre</th>
                      <th>Descripcion</th>
                      <th>Precio Unitario</th>
                      <th>Genero</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    {products.map((product, i) => {
                      return <ChartRow {...product} key={i} />;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chart;
