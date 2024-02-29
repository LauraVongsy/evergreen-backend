const Cart = require("../models/cartModel.js");
const Product = require("../models/productModel.js");

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
exports.createCart = async (req, res) => {

    try {
        const id_user = req.id_user;
        const productsToAdd = req.body.products;

        let cart = await Cart.findOne({ where: { id_user: id_user } });
        if (!cart) {
            cart = await Cart.create({ id_user: id_user });
        }


        await Promise.all(productsToAdd.map(async (product) => {
            const { id_product, quantity } = product;


            const existingProduct = await Product.findByPk(id_product);

            if (!existingProduct) {
                throw new Error(`Le produit avec l'ID ${id_product} n'existe pas`);
            }


            await cart.addProduct(existingProduct, { through: { quantity } });
        }));

        res.status(200).json({ message: 'Produits ajoutés au panier avec succès!' });
    } catch (error) {
        console.error('Erreur lors de l\'ajout au panier:', error);
        res.status(500).json({ error: 'Erreur lors de l\'ajout au panier' });
    }
};

