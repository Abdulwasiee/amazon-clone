import React from "react";
import Layout from "../../components/Layout/LayOut"; 
import Carousel from "../../components/Carouse/Carouser"; 
import Category from "../../components/Catagory/Catagory"; 
import Product from "../../components/product/Product"; 

function Landing() {
  return (
    <Layout>
      <Carousel />
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing;
