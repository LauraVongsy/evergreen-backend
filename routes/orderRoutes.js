const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth")


const {
    getOneOrder,
    updateOrder,
    deleteOrder,
    createOrder
} = require("../controllers/CartController");

router.get = ("/:id", auth, getOneOrder);
router.put = ("/:id", auth, updateOrder);
router.delete = ("/:id", auth, deleteOrder);
router.post = ("/create-order", auth, createOrder);

module.exports = router;