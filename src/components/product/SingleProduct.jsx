import React from "react";
import Rating from "@mui/material/Rating";
import "./Product.css";
import Currency from "./currencyFormat/currency";
import { Link } from "react-router-dom";

function SingleProduct({ product, flex, descDisplay }) {
  if (!product || !product.title) {
    return null;
  }

  return (
    <Link to={`/products/${product.id}`}>
      <dlsiv className={`singleProduct${flex ? `flexer` : ``}`}>
        <div className="imgContainer">
          <img
            src={product.image}
            alt={product.title}
            className="productImage"
          />
        </div>

        <div>
          <h2>{product.title}</h2>
          {descDisplay &&
          (
            <div className="description">
              <p>{product.description}</p>
            </div>
          )}
          <small>
            <Rating value={product.rating.rate} readOnly precision={0.1} />
            {` (${product.rating.count})`}
          </small>
          <Currency amount={product.price} />
          <button className="add">Add to Cart</button>
        </div>
      </dlsiv>
    </Link>
  );
}

export default SingleProduct;
