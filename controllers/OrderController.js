const Cart = require("../models/orderModel.js");
const Product = require("../models/productModel.js");

exports.getOneOrder = async (req, res) => {

    try {
        const cart = await Cart.findOne({ where: { id_cart: req.param.id } })
        res.status(200).json(cart);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.updateOrder = async (req, res) => {
    const cart = await Cart.findOne({ where: { id_cart: req.param.id } })
    try {
        const updatedCart = await Cart.update(cart);
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
exports.deleteOrder = async (req, res) => {

    try {
        const cart = await Cart.destroy({ where: { id_cart: req.param.id } })
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
exports.createOrder = async (req, res) => {

    try {
        const id_user = req.id_user; // Vous devez avoir une méthode pour récupérer l'ID de l'utilisateur après l'authentification
        const productsToAdd = req.body.products; // Supposons que vous recevez les produits à ajouter depuis le frontend

        // Trouvez le panier de l'utilisateur ou créez-le s'il n'existe pas
        let cart = await Cart.findOne({ where: { id_user: id_user } });
        if (!cart) {
            cart = await Cart.create({ id_user: id_user });
        }

        // Ajoutez chaque produit au panier avec la quantité dans la table d'association
        await Promise.all(productsToAdd.map(async (product) => {
            const { id_product, quantity } = product;

            // Vérifiez si le produit existe
            const existingProduct = await Product.findByPk(id_product);

            if (!existingProduct) {
                throw new Error(`Le produit avec l'ID ${id_product} n'existe pas`);
            }

            // Ajoutez le produit au panier avec la quantité
            await cart.addProduct(existingProduct, { through: { quantity } });
        }));

        res.status(200).json({ message: 'Produits ajoutés au panier avec succès!' });
    } catch (error) {
        console.error('Erreur lors de l\'ajout au panier:', error);
        res.status(500).json({ error: 'Erreur lors de l\'ajout au panier' });
    }
};

