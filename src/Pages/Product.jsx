import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import Card from '../Component/product/Card'

const Product = () => {
  const [product,setProduct] = useState([]);
  const getProduct = async () => {
    const {data} =await axios.get('http://localhost:3000/products')
    setProduct(data)
  }

  useEffect(() => {
    getProduct()
  } , [])

  return (
    <div>
      <Navbar />
      <div className=" flex flex-wrap  gap-12 mx-14 my-6">

     {product?.map(product => <Card product={product} /> )}
      </div>
    </div>
  )
}

export default Product
