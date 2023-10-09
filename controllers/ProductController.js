const Product = require("../models/productModel");

// Recupération des produits
exports.getAllProducts = async (req, res) => {
  try {
    const product = await Product.findAll();
    await res.status(200).json(post);
  } catch (err) {
    await res.status(500).json({ message: err.message });
  }
};

// Récupération d'un produit par son ID
exports.getOneProduct = async (req, res) => {
  try {
    const product = await Product.findById({
      where: { product_id: req.params.id },
    }).exec();
    await res.status(200).json(product);
  } catch (err) {
    await res.status(400).json({ message: err.message });
  }
};
