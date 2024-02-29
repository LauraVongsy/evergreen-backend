const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth")

const {
    getOneBlog,
    getAllBlog,
    createBlog,
    updateBlog,
    deleteBlog
} = require("../controllers/BlogController");

router.get("/", getAllBlog);
router.get("/:id", getOneBlog);
router.post("/create", auth, createBlog);
router.put("/update", auth, updateBlog);
router.delete("/delete", auth, deleteBlog);

module.exports = router;