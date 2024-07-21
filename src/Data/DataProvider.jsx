import React, { useReducer, createContext } from "react";

export const contextProvider = createContext();

function DataProvider({ children, initialState, reducer }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <contextProvider.Provider value={{ state, dispatch }}>
      {children}
    </contextProvider.Provider>
  );
}

export default DataProvider;
