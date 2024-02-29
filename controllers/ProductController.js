const Product = require("../models/productModel");

// Recupération des produits
exports.getAllProducts = async (req, res) => {
  try {
    const product = await Product.findAll();
    await res.status(200).json(product);
  } catch (err) {
    await res.status(500).json({ message: err.message });
  }
};

// Récupération d'un produit par son ID
exports.getOneProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: { id_product: req.params.id },
    });
    await res.status(200).json(product);
  } catch (err) {
    await res.status(400).json({ message: err.message });
  }
};

//creation d'un produit en base de données
exports.createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    const product = await Product.create({
      product_name: newProduct.product_name,
      product_image: newProduct.product_image,
      product_short_desc: newProduct.product_short_desc,
      product_description: newProduct.product_description,
      product_price: newProduct.product_price,
      product_stock: newProduct.product_stock,
      id_water: newProduct.id_water,
      id_heat: newProduct.id_heat,
      id_sunlight: newProduct.id_sunlight,
      id_level: newProduct.id_level,
      id_category: newProduct.id_category,
    });
    res.status(201).json({
      newProduct,
      message: "produit créé",
    });
  } catch (err) {
    await res.status(400).json({ message: err.message });
  }
};

exports.getProductsByCategory = async (req, res) => {
  const categoryId = req.params.categoryId;
  try {
    const categoryProducts = await Product.findAll({
      where: { id_category: categoryId },
    });
    if (!categoryProducts) {
      return res.status(404).json({ message: "Catégorie non trouvée" });
    }
    return res.status(200).json(categoryProducts);
  } catch (err) {
    await res.status(400).json({ message: err.message });
  }
};
exports.updateProduct = async (req, res) => {
  const updatedProductData = req.body;
  try {
    const product = await Product.findOne({
      where: { id_product: req.params.id },
    });
    if (!product) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }
    await product.update(updatedProductData);
  } catch (err) {
    await res.status(400).json({ message: err.message });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: { id_product: req.params.id },
    });
    if (!product) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }
    await product.destroy();
    return res.status(200).json({ message: "Produit supprimé avec succès" });
  } catch (err) {
    await res.status(400).json({ message: err.message });
  }
};
