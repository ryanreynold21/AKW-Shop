import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
  const [isPanding,setPanding] = useState(true);
  const [username,setUserName] = useState("kminchelle");
  const [password,setPassword] = useState('0lelplR')
  const navigate = useNavigate();
  console.log(username,password)

  const apiLogin = async (userdata) => {
    const {data} = await axios.post('https://dummyjson.com/auth/login',userdata);
    console.log(data)
    if(data){
      const user = {name:data?.name , token:data?.token , image:data?.image}
      const userdata = localStorage.setItem( "userData" , JSON.stringify(user))
      navigate('/')
    }
    setPanding(true)
  };

  const LoginHandler = async (e) => {
    e.preventDefault();
    setPanding(false)
    const userdata = {username,password}
    await apiLogin(userdata);
  }

  return (
    <div className="hero min-h-screen bg-base-300">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">Provident cupiditate vet. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={LoginHandler} action="">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input value={username} onChange={e => setUserName(e.target.value)} type="text" placeholder="name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input value={password} onChange={e => setPassword(e.target.value)} type="text" placeholder="password" className="input input-bordered" />
          </div>
          <div className="form-control mt-6">
            {isPanding ? (
              <button type='submit' className="btn btn-primary">Login</button>
              ) : (
              <button className=' btn loading'>Loading</button>
            )}
          
          </div>
        </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login
