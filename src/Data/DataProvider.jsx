// DataProvider.js
import React, { useReducer, createContext } from "react";
import { reducer, initialState } from "../Utility/reducer";

export const contextProvider = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <contextProvider.Provider value={{ state, dispatch }}>
      {children}
    </contextProvider.Provider>
  );
};

export default DataProvider;
