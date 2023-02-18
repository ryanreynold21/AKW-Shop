import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Success = () => {
  return (
    <div>
        <Navbar />
    <div className=" flex flex-col items-center justify-center p-10">
     <iframe 
      style={{ background: "transparent", height: "300px", width: "300px" }}
      src="https://embed.lottiefiles.com/animation/83548"
      ></iframe>
      <p className='my-5 text-xl text-cyan-800'>Successfully order </p>
    <Link to={'/'}>
    <button className=' btn-ghost border border-purple-300 text-white rounded px-4 py-2 my-4'>Go to shop</button>
    </Link>
      </div>
</div>
  )
}

export default Success
