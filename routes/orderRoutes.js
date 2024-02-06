const express = require("express");
const router = express.Router();

const {
    getOneOrder,
    updateOrder,
    deleteOrder,
    createOrder
} = require("../controllers/OrderController");

router.get = ("/:id", getOneOrder);
router.put = ("/:id", updateOrder);
router.delete = ("/:id", deleteOrder);
router.post = ("/create-order", createOrder);

module.exports = router;