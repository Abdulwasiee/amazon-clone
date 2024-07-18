import React from "react";
import numeral from "numeral";

const Currency = ({ amount }) => {
  const formatter = (amount) => {
    let price = numeral(amount).format("$0,000.00");
    return price;
  };

  return <div className="price">{formatter(amount)}</div>;
};

export default Currency;
