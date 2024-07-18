import React from "react";
import { catagorydata } from "./CatagoryInfo";
import SingleCatagory from "./SingleCatagory";
import "./catagory.css";

function Catagory() {
  return (
    <>
      <section className="catagories">
        {catagorydata.map((singleData, index) => (
          <SingleCatagory key={index} data={singleData} />
        ))}
      </section>
    </>
  );
}

export default Catagory;
