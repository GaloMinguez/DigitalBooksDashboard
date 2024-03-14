import React, { useEffect, useState } from "react";

export const UltimoCliente = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Petición Asincrónica al montarse el componente
    const endpointUsers = "http://localhost:3002/api/users/5";
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
            <div className="row">
              <div>
                <img src= {`http://localhost:3002/img/users/${users.imagen}}`} alt="imagen de usuario" id="imgAddUser" />
              </div>
              <div className="col-lg-6 mb-4 card-header py-3 m-0 font-weight-bold text-gray-800 centrado">
                <span>Nombre Completo:</span> <span> {users.fullName}</span>
                <p>Email: {users.email}</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
