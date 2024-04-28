const Product = require("../models/productModel");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getFeatureProduct = async (req, res) => {
  try {
    const featuredProducts = await Product.findOne({ featured: true });
    if (!featuredProducts || featuredProducts.length === 0) {
      return res.status(404).json({ message: "No featured products found" });
    }
    res.json(featuredProducts);
  } catch (error) {
    console.error("Error fetching featured products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.createProduct = async (req, res) => {
  console.log(req.body);
  try {
    const { name, description, featured, features, benefits, downloadURL, featureImage } = req.body;
    const newProduct = new Product({
      name,
      description,
      featured,
      features,
      benefits,
      downloadURL,
      featureImage
    });
    console.log(newProduct)
    await newProduct.save();
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    await Product.deleteOne({ _id: id }); // Use deleteOne() to delete the product
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
