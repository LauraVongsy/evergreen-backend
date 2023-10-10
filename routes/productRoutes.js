const express = require("express");

const {
  getOneProduct,
  getAllProducts,
  createProduct,
  getProductsByCategory,
} = require("../controllers/ProductController");

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getOneProduct);
router.get("/:categoryId", getProductsByCategory);
router.post("/auth/", createProduct);
router.put("/auth/:id", updateProduct);
router.delete("/auth/:id", deleteProduct);

module.exports = router;
