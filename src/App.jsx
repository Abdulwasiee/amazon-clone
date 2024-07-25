import React, { useContext, useEffect } from "react";
import "./App.css";
import { contextProvider } from "./Data/DataProvider";
import Router from "./Router";
import { auth } from "./Utility/fireBase";
import { Type } from "./Utility/action.type";

function App() {
  const { state, dispatch } = useContext(contextProvider);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
