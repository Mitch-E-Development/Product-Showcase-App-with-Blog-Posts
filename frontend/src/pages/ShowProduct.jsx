import React, { useState, useEffect } from "react";
import { getSingleProduct } from "../services/productService";

import ProductBanner from "../components/ShowProduct/ProductBanner";
import Summary from "../components/ShowProduct/Summary";
import Features from "../components/ShowProduct/Features";
import Reasons from "../components/ShowProduct/Reasons";
import CallToAction from "../components/ShowProduct/CallToAction";

const ShowProduct = () => {
  const [product, setProduct] = useState({});

  const id = "66230e93862e1249483e6c43";

  useEffect(() => {
    const getData = async () => {
      try {
        const productData = await getSingleProduct(id);
        setProduct(productData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="">
      <ProductBanner product={product} />

      <Summary product={product} />

      <Features product={product} />

      <Reasons product={product} />

      <CallToAction product={product} />
    </div>
  );
};

export default ShowProduct;
