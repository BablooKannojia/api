import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home(props) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(res => {
                setProducts(res.data.products)
            })
            .catch(err => console.log(err))
    }, [])
    console.log(products, 'Hello');

    // DELETE Rest API Data 
    async function deleteOperation(id) {
        let res = await fetch("https://dummyjson.com/products/" + id, {
            method: "DELETE"
        });
        res = await res.json();
        alert("Item Deleted");
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-12'>
                        <div className='main-table'>
                            <div className='table-main text-white'>
                                <table className="table text-white">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product Images</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Discount</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Increase/Decrease</th>
                                            <th scope="col">Operations</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products.map((produ, index) => (
                                                <tr key={index}>
                                                    <td><img alt='Apple' style={{ width: 100 }} src={produ.thumbnail}></img></td>
                                                    <td>{produ.title}</td>
                                                    <td>{produ.price}</td>
                                                    <td>{produ.discountPercentage}</td>
                                                    <td>{produ.stock}</td>
                                                    <td><button onClick={() => deleteOperation(produ.id)} className='delete-btn'>Delete</button></td>
                                                    <td><button className='add-to-cart'
                                                        onClick={
                                                            () => { props.addToCartHandler(produ.id) }
                                                        }>
                                                        +</button></td>
                                                    <td><button className='remove-to-cart'
                                                        onClick={
                                                            () => { props.removeToCartHandler(produ.id) }
                                                        }>
                                                        -</button></td>
                                                </tr>

                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
