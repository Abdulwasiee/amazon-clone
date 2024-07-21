import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { contextProvider } from "../../Data/DataProvider";
import Currency from "./currencyFormat/currency";
import { Type } from "../../Utility/action.type";
import "./Product.css";

function SingleProduct({
  product,
  flex,
  descDisplay,
  buttonDisp,
  smallHeight,
}) {
  const { state, dispatch } = useContext(contextProvider);

  const addToBasket = () => {
    dispatch({ type: Type.ADD_TO_BASKET, item: product });
  };

  if (!product || !product.title) {
    return null;
  }

  return (
    <div
      className={`singleProduct${flex ? `flexer` : ``}${
        smallHeight ? `small` : ``
      } `}
    >
      <Link to={`/products/${product.id}`}>
        <div className="imgContainer">
          <img
            src={product.image}
            alt={product.title}
            className="productImage"
          />
        </div>
      </Link>
      <div>
        <h2>{product.title}</h2>
        {descDisplay && (
          <div className="description">
            <p>{product.description}</p>
          </div>
        )}
        <small>
          <Rating value={product.rating.rate} readOnly precision={0.1} />
          {` (${product.rating.count})`}
        </small>
        <Currency amount={product.price} />
        {buttonDisp && (
          <button className="add" onClick={addToBasket}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default SingleProduct;
