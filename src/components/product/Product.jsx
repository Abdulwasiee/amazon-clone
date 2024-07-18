import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleProduct from "./SingleProduct";
import "./Product.css"; 

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error making the request:", error);
      });
  }, []);

  return (
    <div className="productList">
      {products.map((singleProduct, index) => (
        <SingleProduct key={index} product={singleProduct} />
      ))}
    </div>
  );
}

export default Product;
