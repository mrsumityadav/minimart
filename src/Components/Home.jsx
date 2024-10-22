import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/context";
import Loading from "./Loading";
import axios from "../utils/Axios";

function Home() {
  const [product] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredProduct, setfilteredProduct] = useState(null);

  const getProductsCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setfilteredProduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!filteredProduct) setfilteredProduct(product);
    if (category != "undefined") getProductsCategory();
  }, [category, product]);

  return product ? (
    <>
      <Nav />
      <div className="h-screen overflow-y-auto w-[85%] py-10 px-8  flex flex-wrap gap-4">
        {filteredProduct &&
          filteredProduct.map((item, index) => (
            <Link
              key={index}
              to={`/details/${item.id}`}
              className="cart w-[15vw] h-[18vw] border border-blue-100 rounded-md shadow flex
          justify-center flex-col gap-5 p-5"
            >
              <div
                className="w-full hover:scale-110 transition-all h-[10vw] bg-center bg-contain bg-no-repeat"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              ></div>
              <span className="text-sm font-semibold w-full h-[5vh] text-ellipsis overflow-hidden">
                {item.title}
              </span>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;