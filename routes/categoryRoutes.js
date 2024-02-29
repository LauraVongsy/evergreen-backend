const express = require("express");
const auth = require("../middlewares/auth")




const {
  getAllCategories,
  getOneCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/CategoryController");

const router = express.Router();

router.get("/", getAllCategories);
router.get("/:id", getOneCategory);
router.post("/update", auth, updateCategory);
router.post("/create", auth, updateCategory);
router.post("/delete", auth, deleteCategory);

module.exports = router;
