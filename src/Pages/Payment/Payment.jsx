import React, { useContext, useState } from "react";
import LayOut from "../../components/Layout/LayOut";
import { contextProvider } from "../../Data/DataProvider";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import SingleProduct from "../../components/product/SingleProduct";
import { axiosInstance } from "../../Utility/axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/fireBase";
import { collection, doc, setDoc } from "firebase/firestore";
import "./payment.css";
import { useNavigate } from "react-router-dom";
import { Type } from "../../Utility/action.type";
import Currency from "../../components/product/currencyFormat/currency";

function Payment() {
  const {
    state: { user, basket },
    dispatch,
  } = useContext(contextProvider);

  if (!user) {
    return <div>Please log in to proceed with the payment.</div>;
  }

  const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0);
  const total = basket?.reduce(
    (amount, item) => item.price * item.amount + amount,
    0
  );

  const navigate = useNavigate();
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (e) => {
    setCardError(e.error ? e.error.message : "");
  };
const handleSubmit = async (event) => {
  event.preventDefault();

  if (!user || !user.uid) {
    setCardError("User information is missing. Please log in again.");
    return;
  }

  setProcessing(true);

  try {
    const totalCents = Math.round(total * 100);

    const response = await axiosInstance.post("/payment/create", {
      total: totalCents,
    });

    const clientSecret = response.data.clientSecret;

    const { paymentIntent, error } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: user.email,
          },
        },
      }
    );
    console.log("[PaymentIntent]", paymentIntent);

    if (error) {
      console.error("[PaymentError]", error);
      setCardError(error.message);
    } else if (paymentIntent.status === "succeeded") {
      console.log("Payment succeeded!");

      try {
        const userOrdersCollection = collection(
          db,
          "users",
          user.uid,
          "orders"
        );
        const orderDocRef = doc(userOrdersCollection, paymentIntent.id);

        // Write to Firestore
        await setDoc(orderDocRef, {
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
        console.log("Order saved to Firestore");

        dispatch({
          type: Type.EMPTY_BASKET,
        });

        navigate("/orders", { state: { msg: "You have an order!" } });
      } catch (firestoreError) {
        console.error("Firestore Error:", firestoreError);
        setCardError(
          "Failed to save order in Firestore. Please contact support."
        );
      }
    } else {
      setCardError("Payment failed. Please try again.");
      console.error("[PaymentIntent Error]", paymentIntent);
    }
  } catch (err) {
    console.error("[Error]", err);
    setCardError("Payment failed. Please try again.");
  } finally {
    setProcessing(false);
  }
};

  return (
    <LayOut>
      <header className="payment_header">
        <h1>Checkout ({totalItem}) items</h1>
      </header>
      <section className="payment">
        <div className="payment_section">
          <h3>Delivery Address</h3>
          <div>{user.email}</div>
          <div>Hawassa, Ethiopia</div>
        </div>
        <hr />
        <div className="payment_section">
          <h3>Review items and delivery</h3>
          <div className="payment_items">
            {basket?.map((item) => (
              <SingleProduct key={item.id} product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        <div className="payment_section">
          <h3>Payment Method</h3>
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            {cardError && <div className="error">{cardError}</div>}
            <div className="balance">
              <Currency amount={total} />
            </div>
            <button
              type="submit"
              className="payment_button"
              disabled={processing}
            >
              {processing ? (
                <div>
                  <p>Please wait</p>
                  <ClipLoader size={20} color={"#FFF"} loading={processing} />
                </div>
              ) : (
                "Pay Now"
              )}
            </button>
          </form>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
