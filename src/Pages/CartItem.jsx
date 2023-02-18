import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Item from '../Component/item'
import Navbar from '../Component/Navbar'

const CartItem = () => {
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  const[cart,setCart] = useState(cartItems);
  const total = cart?.reduce( (pv,cv) => pv+cv.price*cv.qty ,0);
  const navigate = useNavigate();

  const clearHandler = () => {
    setCart([]);
    localStorage.removeItem("cartItems")
  };

  const purchaseHandler = () => {
    if(!cart?.length) return;
    setCart([]);
    localStorage.removeItem('cartItems')
    navigate('/success')
  };

  const removeFromCart = (id) => {
    setCart(cart?.filter((item) => item.id !== id));
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cart?.filter((item) => item.id !== id))
    );
  };
    
  const increment = (id) => {
    setCart(
      cart?.map((item) => {
        if (item.id === id) {
          item.qty += 1;
        }
        return item;
      })
    );
  };
  const decrement = (id) => {
    setCart(
      cart?.map((item) => {
        if (item.id === id && item.qty > 1) {
          item.qty -= 1;
        }
        return item;
      })
    );
  };

  return (
    <div className=''>
      <Navbar />
      <Link to={'/'}>
      <button className=' px-4 py-2 border-rose-600 btn-ghost border'>Shop</button>
      </Link>
      <div className=' h-screen flex flex-col items-center justify-center'>
      <div className=" flex item-center flex-col w-1/2">
        {!cart?.length && (
             <div className=" flex flex-col items-center justify-center p-10">
             <span className=' text-xl text-cyan-700'>Your Cart is empty !</span>
             <Link to={'/'}>
              <button className='my-2 text-white btn-ghost px-4 py-2 rounded shadow-md'>Go to shop</button>
             </Link>
           </div>
        )}
      {cart?.map(item => <Item 
      key={item.id} 
      item={item} 
      increment={increment} 
      decrement={decrement} 
      removeFromCart={removeFromCart}
      /> )}
      </div>
    <div className=" bg-slate-900 w-1/2 py-6 text-center">
        <span className=' text-xl font-bold text-cyan-500'>Total price - $ {total} </span>
        <div className=" mt-4">
        <button onClick={clearHandler} className='mx-3 text-lg text-white  rounded px-4 py-2 bg-rose-500 hover:bg-rose-600'>Clear</button>
        <button onClick={purchaseHandler}  className='mx-3 text-lg rounded px-4  py-2 btn-ghost text-cyan-500 border-pink-400 '>Perchase</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CartItem
