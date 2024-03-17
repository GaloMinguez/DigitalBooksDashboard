import React, { useEffect, useState } from "react";
import  {CategoriasProducts}  from "./CategoriasProducts";

function GenresInDb() {
  const [genres, setGenres] = useState([]);
  //const [genresProducts, setGenresProducts] = useState([]);

  useEffect(() => {
    // Petición Asincrónica al montarse el componente
    const endpointGenres = "http://localhost:3002/api/genres";
    fetch(endpointGenres)
      .then((response) => response.json())
      .then((data) => setGenres(data.data))
      .catch((error) => console.log(error));

      /*const endpointGenresProducts = `http://localhost:3002/api/genres/${genresProducts.id}/products`;
      fetch(endpointGenresProducts)
        .then((response) => response.json())
        .then((data) => setGenresProducts(data.data))
        .catch((error) => console.log(error));*/
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
              genres.map( ( row , i) => {
                return <CategoriasProducts { ...row} key={i}/>
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
