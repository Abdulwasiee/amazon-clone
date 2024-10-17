import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DataProvider from "./Data/DataProvider.jsx";
import SearchProvider from "./Data/searchContext.jsx"; 
import { initialState, reducer } from "./Utility/reducer.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      <SearchProvider>
      
        <App />
      </SearchProvider>
    </DataProvider>
  </React.StrictMode>
);
