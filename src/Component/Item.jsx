import React from 'react';
import {BsPlusCircle} from 'react-icons/bs';
import {BsDashCircle} from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai'

const Item = ({item,increment,decrement}) => {
  const { title, description, thumbnail, price, category, rating } = item;
  return (
    <div className=' flex items-center justify-evenly border border-b-cyan-700 shadow-md shadow-cyan-500/50 my-2 py-6'>
      {/* <button onClick={removeFromCart(item?.id)} className=' p-2 top-0 right-0'> <AiOutlineClose /> </button> */}
    <div className="">
    <img src={thumbnail} className='h-32 w-32' alt="" />
    <h1 className='w-56'>{title}</h1>
    </div>
    <div className="">
      <p className=' text-cyan-600 font-bold text-xl'>$ {price*item.qty}</p>
        <div className=" flex items-center gap-3 my-3">
          <button onClick={() => decrement(item?.id)} className=' px-4 text-black bg-zinc-300 rounded-md py-1'> <BsDashCircle /> </button>
          <span>{item.qty}</span>
          <button onClick={() => increment(item?.id)} className=' px-4 text-black bg-zinc-300 rounded-md py-1'> <BsPlusCircle /> </button>
        </div>
    </div>
   
</div>
  )
}

export default Item
