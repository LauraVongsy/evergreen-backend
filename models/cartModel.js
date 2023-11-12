// cartModel.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const Product = require("./productModel");

const Cart = sequelize.define('cart', {
    id_cart: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

const CartItem = sequelize.define('cart_item', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

// Associez les modèles pour créer une relation many-to-many
Cart.belongsToMany(Product, {
    through: CartItem,
    foreignKey: 'id_cart',
});

Product.belongsToMany(Cart, {
    through: CartItem,
    foreignKey: 'id_product',
});


module.exports = { Cart, CartItem };
