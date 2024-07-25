import React from "react";
import "./Loder.css";
import { ScaleLoader } from "react-spinners";

function Loader() {
  return (
    <div className="loading-container">
      <ScaleLoader
        color={"#123abc"}
        height={35}
        width={4}
        radius={2}
        margin={2}
      />
    </div>
  );
}

export default Loader;
