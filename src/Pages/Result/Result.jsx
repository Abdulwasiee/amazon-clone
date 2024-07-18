import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/LayOut";
import axios from "axios";
import '../../components/product/Product'
import "./Result.css";
import SingleProduct from "../../components/product/SingleProduct";

function Result() {
  const { categoryId } = useParams();
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${categoryId}`)
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryId]);
  console.log(result);
  return (
    <Layout>
      <h1 className="results">Results</h1>
      <h4 className="resultTitle">Category/{categoryId}</h4>
      <hr />
      <div className="categotyProductList">
        {result.length > 0 ? (
          result.map((singleItem) => (
            <SingleProduct key={singleItem.id} product={singleItem} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Layout>
  );
}

export default Result;
