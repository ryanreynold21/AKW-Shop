import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Cart from '../Component/Cart'
import Navbar from '../Component/Navbar'
import Card from '../Component/product/Card';
import Loader from '../Component/Loader/Loader'

const Product = () => {
  const [product,setProduct] = useState([]);
  const [isPanding,setIsPanding] = useState(true);
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const [cart,setCart] =useState(cartItems ? [...cartItems] : []);

  const getProduct = async () => {
    const {data} =await axios.get('http://localhost:3000/products')
    setIsPanding(false)
    setProduct(data)
  };

  const addToCart = (product) => {
    setCart([...cart,product])
    localStorage.setItem('cartItems',JSON.stringify([...cart,product]))
  };

  const removeFromCart = (id) => {
    setCart(cart?.filter(item => item?.id !== id))
    localStorage.setItem("cartItems", JSON.stringify(cart?.filter(item => item?.id !== id)))
  };

  useEffect(() => {
    getProduct()
    setIsPanding(true)
  } , [])

  return (
    <div>
      <Navbar />
      {isPanding ? (
       <Loader />
      ) : (
        <div className="">
           <Cart />
        <div className=" flex flex-wrap  gap-12 mx-14 my-6">
         {product?.map(product => <Card
          addToCart={addToCart} 
          removeFromCart={removeFromCart}
          product={product}
          //  deleteProduct={deleteProduct}
          /> )}
          </div>
          </div>
      )}
    
    </div>
  )
}

export default Product
