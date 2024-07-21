import React, { useContext } from "react";
import LayOut from "../../components/Layout/LayOut";
import { contextProvider } from "../../Data/DataProvider";
import SingleProduct from "../../components/product/SingleProduct";
import Currency from "../../components/product/currencyFormat/currency";
import { Link } from "react-router-dom";
import "./cart.css";

function Cart() {
  const {
    state: { basket },
    dispatch,
  } = useContext(contextProvider);

  // Calculate the total amount
  const totalAmount = basket.reduce((acc, product) => acc + product.price, 0);

  return (
    <LayOut>
      {basket.length === 0 ? (
        <p>Oops! No items in your cart</p>
      ) : (
        <div className="cartContainer">
          <div>
            <div className="greeting">
              <h3>Hello</h3>
              <p>Your Shopping Basket</p>
              <hr />
            </div>

            {basket.map((product, i) => (
              <SingleProduct
                key={i}
                product={product}
                flex={true}
                descDisplay={true}
                smallHeight={true}
              />
            ))}
          </div>
          <div className="subTotalContainer">
            <p className="subTotal">
              Subtotal ({basket.length} items):{" "}
              <span>
                <Currency amount={totalAmount} />
              </span>
            </p>
            <div className="giftOption">
              <input type="checkbox" id="gift" name="gift" />
              <label htmlFor="gift">This order contains a gift</label>
            </div>
            <Link to="/payment">
              <button className="checkOut">Continue to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </LayOut>
  );
}

export default Cart;
