const express = require("express");
const router = express.Router();

const {
    getOneBestseller,
    getAllBestsellers,
    createBestseller,
    updateBestseller,
    deleteBestseller
} = require("../controllers/BestsellerController");



router.get("/", getAllBestsellers);
router.get("/:id", getOneBestseller);
router.post("/auth", createBestseller);
router.put("/auth/:id", updateBestseller);
router.delete("/auth/:id", deleteBestseller);

module.exports = router;