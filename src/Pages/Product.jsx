import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cart from '../Component/Cart'
import Navbar from '../Component/Navbar'
import Card from '../Component/product/Card'

const Product = () => {
  const [product,setProduct] = useState([]);
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const [cart,setCart] =useState(cartItems ? [...cartItems] : []);

  const getProduct = async () => {
    const {data} =await axios.get('http://localhost:3000/products')
    setProduct(data)
  };

  const addToCart = (product) => {
    setCart([...cart,product])
    localStorage.setItem('cartItems',JSON.stringify([...cart,product]))
  };

  const removeFromCart = (id) => {
    setCart(cart?.filter(item => item?.id !== id))
    localStorage.setItem("cartItems", JSON.stringify(cart?.filter(item => item?.id !== id)))
  }

  useEffect(() => {
    getProduct()
  } , [])

  return (
    <div>
      <Navbar />
      <Cart />
      <div className=" flex flex-wrap  gap-12 mx-14 my-6">

     {product?.map(product => <Card addToCart={addToCart} removeFromCart={removeFromCart} product={product} /> )}
      </div>
    </div>
  )
}

export default Product
