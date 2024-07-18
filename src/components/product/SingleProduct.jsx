import React from "react";
function SingleProduct({ product }) {
  return (
    <div className="singleProduct">
      <img src={product.image} alt={product.title} className="productImage" />
      <h2>{product.title}</h2>
      <small>{`Rating: ${product.rating.rate} (${product.rating.count})`}</small>
      <p className="price">{`$${product.price}`}</p>
    </div>
  );
}

export default SingleProduct;
