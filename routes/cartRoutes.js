const express = require("express");
const router = express.Router();

const {
    getOneCart,
    updateCart,
    deleteCart,
    addToCart
} = require("../controllers/CartController");

router.get = ("/:id", getOneCart);
router.put = ("/:id", updateCart);
router.delete = ("/:id", deleteCart);
router.post = ("/:id/add-to-cart", addToCart);

module.exports = router;