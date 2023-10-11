const express = require("express");
const router = express.Router();

const {
    getOneOrder,
    getAllOrders,
    createOrder,
    updateOrder,
    deleteOrder
} = require("../controllers/OrderController");

router.get("/", getAllOrders);
router.get("/:id", getOneOrder);
router.post("/auth", createOrder);
router.put("/auth", updateOrder);
router.delete("/auth", deleteOrder);

module.exports = router;