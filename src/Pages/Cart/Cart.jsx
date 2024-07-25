import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

import LayOut from "../../components/Layout/LayOut";
import SingleProduct from "../../components/product/SingleProduct";
import Currency from "../../components/product/currencyFormat/currency";
import { contextProvider } from "../../Data/DataProvider";
import { Type } from "../../Utility/action.type";

import "./cart.css";

function Cart() {
  const {
    state: { basket },
    dispatch,
  } = useContext(contextProvider);

  // Calculate the total amount
  const totalAmount = basket.reduce(
    (amount, item) => amount + item.price * item.amount,
    0
  );

  const handleIncrement = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const handleDecrement = (item) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id: item.id,
    });
  };

  return (
    <LayOut>
      {basket.length === 0 ? (
        <p>Oops! No items in your cart</p>
      ) : (
        <div className="cartContainer">
          <div className="greeting-subtotal">
            <div className="greeting">
              <h3>Hello</h3>
              <p>Your Shopping Basket</p>
              <hr />
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
          <div className="item container">
            <div>
              {basket.map((product) => (
                <div key={product.id} className="product-button">
                  <SingleProduct
                    product={product}
                    flex={true}
                    descDisplay={true}
                    smallHeight={true}
                  />
                  <div className="button-group">
                    <button onClick={() => handleIncrement(product)}>
                      <MdKeyboardArrowUp />
                    </button>
                    <p className="amount">{product.amount}</p>
                    <button onClick={() => handleDecrement(product)}>
                      <MdKeyboardArrowDown />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          
          </div>
        </div>
      )}
    </LayOut>
  );
}

export default Cart;
