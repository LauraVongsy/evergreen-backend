const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.js")


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
router.post("/create", auth, createProduct);
router.put("/update/:id", auth, updateProduct);
router.delete("/delete/:id", auth, deleteProduct);

module.exports = router;
