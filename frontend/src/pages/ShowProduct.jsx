import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../services/productService";

import ProductBanner from "../components/showProduct/ProductBanner";
import Summary from "../components/showProduct/Summary";
import Features from "../components/showProduct/Features";
import Reasons from "../components/showProduct/Reasons";
import CallToAction from "../components/showProduct/CallToAction";

const ShowProduct = () => {
  const [product, setProduct] = useState({});
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredReason, setHoveredReason] = useState(null); // Add state for hovered reason
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getSingleProduct(id);
        setProduct(productData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="">
      <ProductBanner product={product} />
      <Summary product={product} />
      <Features product={product} setHoveredFeature={setHoveredFeature} hoveredFeature={hoveredFeature} />
      <Reasons product={product} setHoveredReason={setHoveredReason} hoveredReason={hoveredReason} /> {/* Pass hoveredReason state and setHoveredReason function */}
      <CallToAction product={product} />
    </div>
  );
};

export default ShowProduct;
