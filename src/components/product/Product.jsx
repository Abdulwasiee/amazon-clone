import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleProduct from "./SingleProduct";
import "./Product.css";
import Loader from "../Loder/Loader"; 

function Product() {
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true); // State for loading indicator

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoadingProducts(false); 
      })
      .catch((error) => {
        console.error("There was an error making the request:", error);
        setLoadingProducts(false); 
      });
  }, []);

 
  if (loadingProducts) {
    return <Loader />; 
  }


  return (
    <div className="productList">
      {products.map((singleProduct, index) => (
        <SingleProduct key={index} product={singleProduct} buttonDisp={true} />
      ))}
    </div>
  );
}

export default Product;
