import React from "react";
import { BrowserRouter, redirect, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";

import Payment from "./Pages/Payment/Payment";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Cart from "./Pages/Cart/Cart";
import Result from "./Pages/Result/Result";
import Auth from "./Pages/Auth/Auth";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Protect from "./components/ProtectedRoute/Protect";
import Order from "./Pages/Order/Order";

const stripePromise = loadStripe(
  "pk_test_51PfhUWRtkJKh87Ohivd9z0L2DbiyVKeIQtgyokhChoRhdqWLIftJlvfYcEOYASOifQXJ8AhWKpF1jJ8chZvS4MbQ004CUbqyME"
);

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/orders"
          element={
            <Protect
              msg={"You must log in to see your orders"}
              redirect="/orders"
            >
              <Order />
            </Protect>
          }
        />
        <Route path="/signup" element={<Auth />} />
        <Route path="/category/:categoryId" element={<Result />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/payment"
          element={
            <Protect msg={"You must log in to pay"} redirect="/payment">
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </Protect>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
