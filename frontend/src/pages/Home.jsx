import React, { useState, useEffect } from 'react';
import { getPosts } from '../services/postService'; 
import { getSingleProduct } from '../services/productService'; 
import FeatureBanner from "../components/home/FeatureBanner";
import LatestPosts from "../components/home/LatestPosts";
import NavCards from "../components/home/NavCards";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState({});

  const id = "66230e93862e1249483e6c43";

  useEffect(() => {
    const getData = async () => {
      try {
        const productData = await getSingleProduct(id);
        setFeaturedProduct(productData);
        
        const postData = await getPosts();
        setPosts(postData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <FeatureBanner featuredProduct={featuredProduct} />
      <hr />
      <LatestPosts posts={posts}/>
      <hr />
      <NavCards />
    </div>
  );
};

export default Home;

