import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Order from "./Pages/Order/Order";
import Payment from "./Pages/Payment/Payment";
import ProductDetail from "./Pages/ProductDetail/ProductDetail"; 
import Cart from "./Pages/Cart/Cart";
import Result from "./Pages/Result/Result";
import SignUp from "./Pages/Auth/SignUp";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/order" element={<Order />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/category/:categoryId" element={<Result />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
