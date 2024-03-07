import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

function ContentRow(){

    // traer las api de users
	const [users, setUsers] = useState([]);
	const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);
    const [total, setTotal] = useState(0);


    
	// traer las api users
	useEffect(() => {
		// Petición Asincrónica al montarse el componente
		const endpointUsers = 'http://localhost:3000/api/users';
			fetch(endpointUsers)
				.then(response => response.json())
				.then( data => setUsers(data) )
				.catch(error => console.log(error))
	}, [])

	// traer las api products
	useEffect(() => {
		// Petición Asincrónica al montarse el componente
		const endpointUsers = 'http://localhost:3002/api/products';
			fetch(endpointUsers)
				.then(response => response.json())
				.then( data => {
                    data.categorias = data.categorias.length;
                    setProducts(data);
                } )
				.catch(error => console.log(error))
	}, [])

    // traer las api cars
	useEffect(() => {
		// Petición Asincrónica al montarse el componente
		const endpointUsers = 'http://localhost:3000/api/carts';
			fetch(endpointUsers)
				.then(response => response.json())
				.then( data => setCarts(data) )
				.catch(error => console.log(error))
	}, [])
    
    useEffect(()=>{
        const calculateTotal = () => {
            const totalSum = carts.reduce((accumulator, currentValue) => accumulator + currentValue.total, 0);
            setTotal(totalSum);
          };
        
          calculateTotal();
    },[carts])
    console.log(total);
      

    /*  Cada set de datos es un objeto literal */
    let clientesInDB = {
        title: 'Clientes',
        color: 'primary', 
        cuantity: users.count,
        icon: 'fa-user-check'
    }
    
    let totalProducts = {
        title:' Productos', 
        color:'success', 
        cuantity: products.count,
        icon:'fa-cheese'
    }
    
    let salesQuantity = {
        title:'Venta total' ,
        color:'warning',
        cuantity: '$ '+ total || '2',
        icon:'fa-clipboard-list',
    }

    let sociosQuantity = {
        title:'Categorias' ,
        color:'warning',
        cuantity: products.categorias || '2',
        icon:'fa-clipboard-list',
    }

    

    let cartProps = [
        clientesInDB,
        salesQuantity,
        totalProducts,
        // sociosQuantity,
    ];

    return (
    
        <div className="row">
            {cartProps.map( (tarjetas, i) => {
                return <SmallCard {...tarjetas} key={i}/>
            })}
        </div>
    )
}

export default ContentRow;