import React from "react";
import "./Loder.css"; // Corrected CSS file import
import { PulseLoader } from "react-spinners";

function Loader({ loading }) {
  // Accept loading as a prop
  return (
    <div className="loading-container">
      <PulseLoader color={"#123abc"} loading={loading} size={150} />
    </div>
  );
}

export default Loader;
