const Order = require("../models/orderModel");

exports.getOneOrder = async (req, res) => {
    try {
        const order = Order.findOne({ where: { id_order: req.param.id } })
        await res.status(200).json(order);

    } catch (err) {
        await res.status(400).json({ message: err.message });
    }

}
exports.getAllOrders = async (req, res) => {
    try {
        const orders = Order.findAll();
        await res.status(200).json(orders);

    } catch (err) {
        await res.status(400).json({ message: err.message });
    }

}

exports.createOrder = async (req, res) => {
    try {
        const order = Order.create({ where: { id_order: req.param.id } })
        await res.status(200).json(order);

    } catch (err) {
        await res.status(400).json({ message: err.message });
    }

}

exports.updateOrder = async (req, res) => {
    try {
        const order = Order.update({ where: { id_order: req.param.id } })
        await res.status(200).json(order);

    } catch (err) {
        await res.status(400).json({ message: err.message });
    }

}

exports.deleteOrder = async (req, res) => {
    try {
        const order = Order.destroy({ where: { id_order: req.param.id } })
        await res.status(200).json(order);

    } catch (err) {
        await res.status(400).json({ message: err.message });
    }

}