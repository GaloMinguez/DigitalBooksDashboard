import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

function ContentRow(){

    // traer las api de users
	const [users, setUsers] = useState([]);
	const [products, setProducts] = useState([]);
    const [genres, setGenres] = useState([]);
    //const [carts, setCarts] = useState([]);
    //const [total, setTotal] = useState(0);


    
	// traer las api users
	useEffect(() => {
		// Petición Asincrónica al montarse el componente
		const endpointUsers = 'http://localhost:3002/api/users';
			fetch(endpointUsers)
				.then(response => response.json())
                .then(data => {
                    setUsers(
                        {
                            count: data.meta.count,
                            users: data.users,
                        }
                    )})
				.catch(error => console.log(error))
	}, [])

	// traer las api products
	useEffect(() => {
		// Petición Asincrónica al montarse el componente
		const endpointProducts = 'http://localhost:3002/api/products';
			fetch(endpointProducts)
				.then(response => response.json())
				.then(data => {
                    setProducts(
                        {
                            count: data.meta.count,
                            products: data.products,
                        }
                    )})
				.catch(error => console.log(error))
	}, [])

    	// traer las api genres
	useEffect(() => {
		// Petición Asincrónica al montarse el componente
		const endpointGenres = 'http://localhost:3002/api/genres';
			fetch(endpointGenres)
				.then(response => response.json())
				.then(data => {
                    setGenres(
                        {
                            count: data.meta.count,
                            genres: data.genres,
                        }
                    )})
				.catch(error => console.log(error))
	}, [])

    // traer las api cars
	/*useEffect(() => {
		// Petición Asincrónica al montarse el componente
		const endpointUsers = 'http://localhost:3000/api/carts';
			fetch(endpointUsers)
				.then(response => response.json())
				.then( data => setCarts(data) )
				.catch(error => console.log(error))
	}, [])*/
    
    /*useEffect(()=>{
        const calculateTotal = () => {
            const totalSum = carts.reduce((accumulator, currentValue) => accumulator + currentValue.total, 0);
            setTotal(totalSum);
          };
        
          calculateTotal();
    },[carts])
    console.log(total);*/
      

    /*  Cada set de datos es un objeto literal */
    let clientesInDB = {
        title: 'CLIENTES',
        color: 'primary', 
        quantity: users.count,
        icon: 'fa-user-check'
    }
    
    let totalProducts = {
        title:' PRODUCTOS', 
        color:'success', 
        quantity: products.count,
        icon:'fa-cheese'
    }
    
    let totalGenres = {
        title:' GENEROS', 
        color:'warning', 
        quantity: genres.count,
        icon:'fa-clipboard-list'
    }

/*    let salesQuantity = {
        title:'Venta total' ,
        color:'warning',
        quantity: '$ '+ total || '2',
        icon:'fa-clipboard-list',
    }*/

   /* let sociosQuantity = {
        title:'Categorias' ,
        color:'warning',
        quantity: products.categorias || '2',
        icon:'fa-clipboard-list',
    }*/

    

    let cartProps = [
        clientesInDB,
//        salesQuantity,
        totalProducts,
        totalGenres,
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