import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Component/Navbar'

const Profile = () => {
    const userData = JSON.parse(localStorage.getItem("userData"))
    const {email,firstName,lastName,image} = userData
    console.log(userData)
  return (
    <>
    <Navbar />
    <div className="card lg:card-side bg-base-200 shadow-xl p-10 m-10">
  <figure><img className=' rounded-full' src={image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{firstName} {lastName}</h2>
    <p>{email}</p>
    <p className=' lg:w-96 md:w-96 sm:w-96 sm:text-[8px] md:text-sm text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat illo facilis quidem incidunt tempore? Voluptate incidunt rem cum asperiores hic, deserunt, cupiditate tenetur nulla vero optio, eius molestias labore maxime?</p>
    <div className="card-actions justify-end">
        <Link to={'/'}>
      <button className="btn btn-primary">Shop</button>
        </Link>
    </div>
  </div>
</div>
    </>
  )
}

export default Profile
Profile