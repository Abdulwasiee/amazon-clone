// Protect.js
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { contextProvider } from "../../Data/DataProvider";

function Protect({ children, msg, redirect }) {
  const navigate = useNavigate();
  const { state } = useContext(contextProvider);
  const { user } = state;

  useEffect(() => {
    console.log("Current user:", user);
    if (!user) {
      navigate("/signup", { state: { msg, redirect } });
    }
  }, [user, navigate, msg, redirect]);

  return user ? children : null;
}

export default Protect;
