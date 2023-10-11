const express = require("express");
const router = express.Router();

const {
  getOneProduct,
  getAllProducts,
  createProduct,
  updateProduct,
  getProductsByCategory,
  deleteProduct
} = require("../controllers/ProductController");



router.get("/", getAllProducts);
router.get("/:id", getOneProduct);
router.get("/:categoryId", getProductsByCategory);
router.post("/auth", createProduct);
router.put("/auth/:id", updateProduct);
router.delete("/auth/:id", deleteProduct);

module.exports = router;
