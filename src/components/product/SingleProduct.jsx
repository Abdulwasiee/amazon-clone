import React from "react";
import Rating from "@mui/material/Rating";
import "./Product.css";
import Currency from "./currencyFormat/currency";

function SingleProduct({ product }) {
  return (
    <div className="singleProduct">
      <img src={product.image} alt={product.title} className="productImage" />
      <h2>{product.title}</h2>
      <small>
        <Rating value={product.rating.rate} readOnly precision={0.1} />
        {` (${product.rating.count})`}
      </small>
      <Currency amount={product.price} />
      <button className="add">Add to Cart</button>
    </div>
  );
}

export default SingleProduct;
