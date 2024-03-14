import React from "react";
import { useState, useEffect } from "react";
import ChartRow from "./ChartRow";

function ChartVentas() {
  const [carts, setCarts] = useState([]);
  const [total, setTotal] = useState(0);

  // traer las api cars
	useEffect(() => {
		// Petición Asincrónica al montarse el componente
		const endpointUsers = 'http://localhost:3002/api/carts';
			fetch(endpointUsers)
				.then(response => response.json())
				.then( data => setCarts(data) )
				.catch(error => console.log(error))
	}, [])

    console.log(carts)

    useEffect(()=>{
        const calculateTotal = () => {
            const totalSum = carts.reduce((accumulator, currentValue) => accumulator + currentValue.total, 0);
            setTotal(totalSum);
          };
        
          calculateTotal();
    },[carts])
    console.log(total);

    return (
        <>
          {/*<!-- Content Wrapper -->*/}
          <div id="content-wrapper" className="d-flex flex-column">
            {/*<!-- Main Content -->*/}
            <div id="content">
              <div className="card shadow mb-4">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                      <thead>
                        <tr>
                          <th>Carrito</th>
                          <th>Productos</th>
                          <th>Fecha</th>
                          <th>Total Carrito</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                          <th>Carrito</th>
                          <th>Productos</th>
                          <th>Fecha</th>
                          <th>Total Venta Global: $ {total}</th>
                        </tr>
                      </tfoot>
                      <tbody>
                        {carts.map((cart) => (
                          <tr key={cart.id}>
                            <td>{cart.id}</td>
                            <td>
                              {cart.cart_products.map((product, index) => (
                                <span key={index}>
                                <ul>
                                  <li>{product.name}: Cant {product.cart_product.quantity}</li>
                                </ul>
                                  {index !== cart.cart_products.length - 1 && ", "}
                                </span>
                              ))}
                            </td>
                            <td>{cart.date}</td>
                            <td>$ {cart.total}</td>
                          </tr>
                        ))}
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


export default ChartVentas;
