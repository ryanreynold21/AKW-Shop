import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Navbar from '../Navbar'

const Detail = () => {
  const [product,setProduct] = useState({});
  const { title, description, stock , thumbnail, price, category, rating ,images ,brand ,discountPercentage} = product
  const {id} = useParams();
  const getProduct = async () => {
      const {data} = await axios.get(`http://localhost:3000/products/${id}`)
      console.log(data)
      setProduct(data)
  };
  useEffect(() => {
      getProduct()
  },[])

  console.log(product)

  return (
    <div>
     <Navbar />
      <div className=" mt-20 bg-base-100">
        <div className="hero-content flex-col lg:flex-row gap-28">
          <div className="">
          <img src={thumbnail} className=" max-w-sm rounded-lg shadow-cyan-700 shadow-lg" />
            <div className=" flex gap-6 mt-10">
                {images?.map((img,index) => (
                   <img key={index} className='w-16 rounded-md' src={img} />
                ) )}
            </div>
          </div>
          <div className=''>
            <p className=' text-orange-400 ml-4 mb-4 border-primary border w-max px-3 py-1 rounded-md'>{brand}</p>
            <h1 className="text-3xl font-bold text-white">{title}</h1>
            <p className=' mt-8 w-96'>{description}</p>
            <div className=" mt-4 flex gap-6 items-center">
            <p className='font-bold text-xl'>${price}</p>
            <span className=' border border-primary text-sm px-1 rounded text-orange-400'>{discountPercentage}%</span>
            </div>
            <p className=' text-gray-500 mt-2'> In stock - {stock}</p>
            <button className="btn btn-primary mt-8">Get Started</button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Detail