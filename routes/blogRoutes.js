const express = require("express");
const router = express.Router();

const {
    getOneBlog,
    getAllBlog,
    createBlog,
    updateBlog,
    deleteBlog
} = require("../controllers/BlogController");

router.get("/", getAllBlog);
router.get("/:id", getOneBlog);
router.post("/auth", createBlog);
router.put("/auth", updateBlog);
router.delete("/auth", deleteBlog);

module.exports = router;