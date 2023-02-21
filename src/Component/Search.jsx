import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LIstItem from './LIstItem'

const Search = () => {
    const [search,setSearch] = useState('');
    const [products,setProduct] = useState([]);
    const [filtered,setFiltered] = useState([]);

    const getProduct = async () => {
        const {data} = await axios.get('http://localhost:3000/products')
      setProduct(data);
    };

 
    const filterProduct = () => {
        const searchProduct = search.toLocaleLowerCase();
        const filteredProduct = products.filter((product) => {
          return product?.category.toLowerCase().includes(searchProduct);
        })
       setFiltered([...filteredProduct])
    }
    
    
    
    useEffect(() => {
        getProduct();
        filterProduct();
    },[products])

  return (
    <div className="form-control relative">
    <input
    value={search}
    onChange={(e) => setSearch(e.target.value)}
     type="text"
     placeholder="Search"
     className="input input-bordered" />
     {!search?.length == 0 && (
         <div className=" absolute top-16 z-50 bg-base-200 list-none p-6 border border-rose-400 rounded-md w-96 right-1 divide-y divide-cyan-700 ">
         {filtered?.map(lists => <LIstItem lists={lists} key={lists?.id} /> )}
        </div>
     )}
    
  </div>
  )
}

export default Search
