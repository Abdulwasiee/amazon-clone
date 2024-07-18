import React from "react";
import "./catagory.css";
import { Link } from "react-router-dom";

function SingleCatagory(props) {
  return (
    <>
      <section className="itemContainer">
        <Link to={`/category/${props.data.name}`}>
          <div className="title">{props.data.title}</div>
          <img
            className="itemImage"
            src={props.data.imgLink}
            alt={props.data.name}
          />
          <p className="shop">shop now</p>
        </Link>
      </section>
    </>
  );
}

export default SingleCatagory;
