const express = require("express");

const {
  getAllCategories,
  getOneCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/CategoryController");

const router = express.Router();

router.get("/", getAllCategories);
router.get("/:id", getOneCategory);
router.post("/auth/", updateCategory);
router.post("/auth/", deleteCategory);

module.exports = router;
