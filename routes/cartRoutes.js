const express = require("express");
const router = express.Router();

const {
    getOneCart,
    updateCart,
    deleteCart
} = require("../controllers/CartController");

router.get = ("/:id", getOneCart);
router.put = ("/:id", updateCart);
router.delete = ("/:id", deleteCart);

module.exports = router;