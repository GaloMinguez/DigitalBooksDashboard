import React, { useEffect, useState } from "react";

export const UltimoCliente = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Petición Asincrónica al montarse el componente
    const endpointUsers = "http://localhost:3002/api/users/lastUser";
    fetch(endpointUsers)
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Ultimo Cliente
            </h5>
          </div>
          <div className="card-body">
            <div className="text-center">
              <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
                style={{ width: '15rem' }} 
                src= "http://localhost:3002/img/users/default.png"
                alt="imagen de usuario"
                id="imgAddUser" />
            </div>
            <h6 className="title-sp">Nombre Completo:</h6>
            <p>{users.fullName}</p>
            <h6 className="title-sp">Email:</h6>
            <p>{users.email}</p>
          </div>
        </div>
      </div>
    </>
  );
};
