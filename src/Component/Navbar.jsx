import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search';
import { motion } from 'framer-motion';

const Navbar = () => {
  const userData = JSON.parse( localStorage.getItem( "userData" ) );
  const navVariants = {
    hidden:{opacity:0},
    visible:{
      opacity:1,
      transition:{delay:1,duration:1}
    }
  }
  return (
    <motion.div
    variants={navVariants}
    initial='hidden'
    animate='visible'
    className="navbar bg-base-300">
      <div className="flex-1">
        <Link to={'/AKW-shop'}>
        <a className="btn btn-ghost normal-case text-xl ml-4">AKW-Shop</a>
        </Link>
      </div>
      <div className="flex-none gap-2">
        <Search />
        <div className="dropdown dropdown-end">
          <label tabIndex={ 0 } className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={ userData?.image } />
            </div>
          </label>
          <ul tabIndex={ 0 } className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <Link to={'/user-profile'}>
              <button>Profile</button>
              </Link>
            </li>
            <li>
              <Link to={ '/login' }>
                <button>Logout</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar
