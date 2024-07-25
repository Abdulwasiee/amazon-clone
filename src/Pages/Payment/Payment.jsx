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

function Payment() {
  const {
    state: { user, basket },
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
      const response = await axiosInstance.post("/payment/create", {
        total: total * 100, // Convert to cents
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

      if (error) {
        console.error("[PaymentError]", error);
        setCardError(error.message);
      } else if (paymentIntent.status === "succeeded") {
        console.log("[PaymentIntent]", paymentIntent);

        const userOrdersCollection = collection(
          db,
          "users",
          user.uid,
          "orders"
        );
        await setDoc(doc(userOrdersCollection, paymentIntent.id), {
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });

        navigate("/orders", { state: { msg: "You have an order!" } });
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
            <button
              type="submit"
              className="payment_button"
              disabled={processing}
            >
              {processing ? (
                <ClipLoader size={20} color={"#FFF"} loading={processing} />
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
