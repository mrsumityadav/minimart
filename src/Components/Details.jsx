import axios from "../utils/Axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../utils/context";
import Loading from "./Loading";

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`./products/${id}`);
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return product ? (
    <div className="flex w-full items-center justify-center gap-10">
      <a
        href="/"
        className="absolute top-5 left-5 px-3 py-2 rounded border-2 border-red-300"
      >
        Home
      </a>
      <img className="w-[18vw]" src={`${product.image}`} alt="" />
      <div className="content w-[30vw]  h-fit p-3">
        <h1 className="text-3xl max-h-[14vh] text-ellipsis overflow-hidden font-semibold">
          {product.title}
        </h1>
        <h3 className="text-sm text-gray-500 my-5 capitalize">
          {product.category}
        </h3>
        <h3 className="text-red-400 my-3">$ {product.price}</h3>
        <p className="text-sm font-semibold mb-5 max-h-[15vh] overflow-hidden">
          {product.description}
        </p>
        <Link
          className="border rounded-md bg-blue-400 cursor-not-allowed hover:bg-blue-200 
        px-3 py-2 mr-5"
        >
          Add to cart
        </Link>
        {/* <Link className="border rounded-md border-red-400 hover:bg-red-200 text-red-300 hover:text-black px-3 py-2">
          Delete
        </Link> */}
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Details;
