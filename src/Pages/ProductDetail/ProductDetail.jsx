import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import SingleProduct from "../../components/product/SingleProduct";
import Loader from "../../components/Loder/Loader";

function ProductDetail() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setItem(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <Loader />;
  }

  if (!item) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <Layout>
        <SingleProduct
          product={item}
          flex={true}
          descDisplay={true}
          buttonDisp={true}
        />
      </Layout>
    </>
  );
}

export default ProductDetail;
