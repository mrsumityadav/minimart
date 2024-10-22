import axios from "./Axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

function Context(props) {
  const [product, setProduct] = useState();

  const getProduct = async () => {
    try {
      const { data } = await axios("./products");
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default Context;
