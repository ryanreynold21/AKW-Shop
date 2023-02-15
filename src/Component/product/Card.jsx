import React from 'react'
import { BsCartPlus } from 'react-icons/bs'
import { useNavigate } from 'react-router'
import Star from './Star'

const Card = ( { product } ) =>
{
  const { title, description, thumbnail, price, category, rating } = product
  const navigate = useNavigate();

  const goDetail = (e) => {
    e.stopPropagation()
    navigate(`/product-detail/${product?.id}`)
  }

  return (
    <div onClick={goDetail} className="card w-96 bg-slate-800 shadow-xl">
      <figure><img className=' mt-4 rounded-md h-44 mx-auto' src={ thumbnail } /></figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-white">
          { title }
        </h2>
        <p>{ description?.substring( 0, 50 ) } . . .</p>
         <div className=" flex items-center gap-2">
         <Star />
         <span className=' badge badge-outline '>{rating}</span>
         </div>
        <div className="card-actions justify-between items-center">
          <h1 className=' text-3xl font-bold'>${price}</h1>
          <button className=' font-bold btn btn-primary'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
