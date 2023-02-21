import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LIstItem = ({lists}) => {
  const navigate = useNavigate();
  const showProduct = (id) => {
    navigate(`/product-detail/${id}`)
  }
  return (
    <Link to={`/product-detail/${lists?.id}`}>
    <div  className='flex justify-between my-2 p-1 hover:bg-slate-700 hover:text-white cursor-grabbing'>
      <li className=' mr-10'>{lists?.title}</li>
      <img src={lists?.thumbnail} className=' rounded w-10 h-10' alt="" />
    </div>
     </Link>
  )
}

export default LIstItem
