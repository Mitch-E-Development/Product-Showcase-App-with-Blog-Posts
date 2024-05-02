import React, { useState, useEffect } from 'react';
import { getPosts } from '../services/postService'; 
import { getFeatureProduct } from '../services/productService'; 
import FeatureBanner from "../components/home/FeatureBanner";
import LatestPosts from "../components/home/LatestPosts";
import NavCards from "../components/home/NavCards";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await getFeatureProduct();
        setFeaturedProduct(productData);       
        const postData = await getPosts();
        setPosts(postData.slice(0,3));
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <FeatureBanner featuredProduct={featuredProduct} />
      <LatestPosts posts={posts}/>  
      <NavCards products={featuredProduct} />
    </div>
  );
};

export default Home;

