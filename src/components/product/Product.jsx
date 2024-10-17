// Product.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleProduct from "./SingleProduct";
import "./Product.css";
import Loader from "../Loder/Loader";
import { useSearch } from "../../Data/searchContext"; // Import the search context

function Product() {
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true); // State for loading indicator
  const { searchQuery } = useSearch(); // Get the search query

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

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="productList">
      {filteredProducts.map((singleProduct, index) => (
        <SingleProduct key={index} product={singleProduct} buttonDisp={true} />
      ))}
    </div>
  );
}

export default Product;
