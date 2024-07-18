import React from "react";
import "./catagory.css";
function SingleCatagory(props) {
  return (
    <>
      <section className="itemContainer">
        <a href="">
          <div className="title">{props.data.title}</div>
          <img
            className="itemImage"
            src={props.data.imgLink}
            alt={props.data.name}
          />
          <p className="shop">shop now</p>
        </a>
      </section>
    </>
  );
}

export default SingleCatagory;
