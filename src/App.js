import React, { useEffect, useState } from 'react';
const App = (props) => {

  const [product, setProduct] = useState();

  // Fetch Rest API Data 
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((result) => {
        result.json().then((resp) => {
          console.warn("result", resp)
          setProduct(resp);
        })
      })
  }, [])

  // DELETE Rest API Data 
  async function deleteOperation(id) {
    let result = await fetch("https://dummyjson.com/products" + id, {
      method: "DELETE"
    });
    result = await result.json();
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
                      product.map((prod, index) => (
                        <tr key={index}>
                          <td><img alt='Apple' style={{ width: 100 }} src={"https://dummyjson.com/products" + prod.thumbnail[0]}></img></td>
                          <td>{prod.title}</td>
                          <td>{prod.price}</td>
                          <td>{prod.discountPercentage}</td>
                          <td>{prod.stock}</td>
                          <td><span onClick={() => deleteOperation(prod.id)} className='delete-btn'>Delete</span></td>
                          <td><button className='add-to-cart'
                            onClick={
                              () => { props.addToCartHandler(prod.id) }
                            }>
                            +</button></td>
                          <td><button className='remove-to-cart'
                            onClick={
                              () => { props.removeToCartHandler(prod.id) }
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
  );
};

export default App;