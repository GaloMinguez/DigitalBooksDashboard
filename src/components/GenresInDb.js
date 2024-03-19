import React, { useEffect, useState } from "react";
import { CategoriasProducts } from "./CategoriasProducts";

function GenresInDb() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // Petición Asincrónica al montarse el componente
    const endpointGenres = "http://localhost:3002/api/genres";
    fetch(endpointGenres)
      .then((response) => response.json())
      .then((data) => setGenres(data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Nuestros Generos
            </h5>
          </div>
          <div className="card-body">
            <div className="row">
              {
                genres.map((row, i) => {
                  if (row.total_productos > 0) return <CategoriasProducts {...row} key={i} />
                  return null
                })
              }
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GenresInDb;
