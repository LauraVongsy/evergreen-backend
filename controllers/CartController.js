const Cart = require("../models/cartModel");

exports.getOneCart = async (req, res) => {

    try {
        const cart = await Cart.findOne({ where: { id_cart: req.param.id } })
        res.status(200).json(cart);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.updateCart = async (req, res) => {
    const cart = await Cart.findOne({ where: { id_cart: req.param.id } })
    try {
        const updatedCart = await Cart.update(cart);
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
exports.deleteCart = async (req, res) => {

    try {
        const cart = await Cart.destroy({ where: { id_cart: req.param.id } })
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
