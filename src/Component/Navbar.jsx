import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const userData = JSON.parse( localStorage.getItem( "userData" ) )
  const [search,setSearch] = useState('');
  console.log(search)
  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl ml-4">AKW-Shop</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
           type="text"
           placeholder="Search"
           className="input input-bordered" />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={ 0 } className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={ userData?.image } />
            </div>
          </label>
          <ul tabIndex={ 0 } className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <button>Profile</button>
            </li>
            <li>
              <button>Customize</button>
            </li>
            <li>
              <Link to={ '/login' }>
                <button>Logout</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
