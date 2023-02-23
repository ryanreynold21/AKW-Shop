import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {FiEdit2} from 'react-icons/fi'
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import Loader from '../Loader/Loader'

const Detail = () => {
  const [product,setProduct] = useState({});
  const [isPanding,setIsPanding] = useState(true);
  const { title, description, stock , thumbnail, price, category, rating ,images ,brand ,discountPercentage} = product
  const {id} = useParams();
  const navigate = useNavigate();
  const [image,setImage] = useState();
  const getProduct = async () => {
      const {data} = await axios.get(`http://localhost:3000/products/${id}`)
      setIsPanding(false)
      setProduct(data)
  };
  useEffect(() => {
      getProduct()
      setIsPanding(true);
  },[])

  const imageHandler = (img) => {
    setImage(img)
  };

  const deleteProduct = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire(await axios.delete(`http://localhost:3000/products/${id}`));
        navigate('/')
      }
    });
  };

 const imageVatiants = {
  hidden:{x:'-100vw'},
  visible:{
    x:0,
    transition:{duration:2}
  }
 }

 const contentVatiants = {
  hidden:{x:'100vw'},
  visible:{
    x:0,
    transition:{duration:2}
  }
 }

  return (
    <div>
     <Navbar />
      {isPanding ? (
        <Loader />
      ) : (
        <div className=" mt-20 bg-base-100">
        <div className="hero-content flex-col lg:flex-row gap-28">
          <motion.div
          variants={imageVatiants}
          initial='hidden'
          animate='visible'
          className="">
          <img src={image ? image : thumbnail} className=" object-cover h-96 mx-auto max-w-sm rounded-lg shadow-cyan-700 shadow-lg" />
          
            <div className=" flex gap-6 mt-10">
                {images?.map((img,index) => (
                   <img onClick={() => imageHandler(img)} key={index} className='w-16 h-16 rounded-md object-center' src={img} />
                ) )}
            </div>
          </motion.div>
          <motion.div
          variants={contentVatiants}
          initial='hidden'
          animate='visible'
          className=''>
               <p className=' text-orange-400 ml-4 mb-4 border-primary border w-max px-3 py-1 rounded-md'>{brand}</p>
               <h1 className="text-3xl font-bold text-white">{title}</h1>
                <p className=' mt-8 w-96'>{description}</p>
            <div className=" mt-4 flex gap-6 items-center">
             <p className='font-bold text-xl'>${price}</p>
             <span className=' border border-primary text-sm px-1 rounded text-orange-400'>{discountPercentage}%</span>
            </div>
              <p className=' text-gray-500 mt-2'> In stock - {stock}</p>
              <div className=" mb-4">
              <Link to={'/success'}>
                <button className="btn btn-primary mt-8"> Buy Now </button>
              </Link>
              <Link to={'/'}>
                <button className="btn mx-6 mt-8"> Go Back </button>
              </Link>
              </div>

            <div className=" btn-group gap-2">
             <div className="tooltip" data-tip="create">
              <Link to={'/addProduct'}>
              <button className="btn border border-orange-600"> <AiOutlinePlusCircle /> </button>
              </Link>
             </div>
             <div className=" tooltip" data-tip='update'>
              <Link to={`/product-detail/edit/${product?.id}`}>
              <button className=' btn border border-orange-600 font-bold'> <FiEdit2 /> </button>
              </Link>
             </div>
             <div className=" tooltip" data-tip='delete'>
              <button onClick={() => deleteProduct(product?.id)} className=' btn text-red-700 border border-orange-600 font-bold'> <RiDeleteBin6Line /> </button>
             </div>
            </div>

          </motion.div>

        </div>
    </div>
      ) }
     
    </div>
  )
}

export default Detail
