import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Component/Navbar"

const Edit = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [rating, setRating] = useState("");
    
    const { id } = useParams();
    const navigate = useNavigate();
    const getProduct = async () => {
      const { data } = await axios.get(`http://localhost:3000/products/${id}`);
      console.log(data);
      setTitle(data?.title);
      setPrice(data?.price);
      setDescription(data?.description);
      setThumbnail(data?.thumbnail);
      setCategory(data?.category);
      setRating(data?.rating);
    };
  
    const onSubmitHandler = async (e) => {
      e.preventDefault();
      const pdata = { title, description, price, thumbnail, rating, category };
      await axios.patch(`http://localhost:3000/products/${id}`, pdata);
      navigate("/")
    };
  
    useEffect(() => {
      getProduct();
    }, []);
  return (
    <>
    <Navbar />
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Create New Product!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
            <form onSubmit={onSubmitHandler} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                {/* const [title, setTitle] = useState("") */}
                <input
                  type="text"
                  placeholder="title"
                  className="input input-bordered"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="price"
                  className="input input-bordered"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="description"
                  className="input input-bordered"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  placeholder="category"
                  className="input input-bordered"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  className="input input-bordered"
                  value={thumbnail}
                  onChange={(e) => setThumbnail(e.target.value)}
                />
              </div>

                <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  placeholder="rating"
                  className="input input-bordered"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
              </div>

              <div className="form-control mt-6">
                <div className="flex gap-5">
                  <Link to="/">
                    <button className="btn btn-error text-white">Cancel</button>
                  </Link>
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
                  </>
  )
}

export default Edit
