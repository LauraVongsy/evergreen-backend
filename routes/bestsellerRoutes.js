const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth")


const {
    getOneBestseller,
    getAllBestsellers,
    createBestseller,
    updateBestseller,
    deleteBestseller
} = require("../controllers/BestsellerController");



router.get("/", getAllBestsellers);
router.get("/:id", getOneBestseller);
router.post("/create", auth, createBestseller);
router.put("/update/:id", auth, updateBestseller);
router.delete("/delete/:id", auth, deleteBestseller);

module.exports = router;