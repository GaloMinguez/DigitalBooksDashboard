import React, { useEffect, useState } from "react";

export const UltimoCliente = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Petición Asincrónica al montarse el componente
        const endpointUsers = "http://localhost:3000/api/users";
        fetch(endpointUsers)
          .then((response) => response.json())
          .then((data) => setUsers(data.ultimoUsuario))
          .catch((error) => console.log(error));
      }, []);

      console.log(users)
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
              <div className="col-lg-6 mb-4 card-header py-3 m-0 font-weight-bold text-gray-800 centrado">
                    <span>Nombre Completo:</span> <span> {users.lastname}, {users.name}</span>
                    <p>Email: {users.email}</p>
                    <p>Celular: {users.phone}</p>
                    <p>Cumpleaños: {users.birthday}</p>
                    <p>Direccion: {users.address}, Dto: {users.apartment}, Barrio: {users.neighborhood_id}</p>
                </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
