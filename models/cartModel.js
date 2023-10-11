const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Cart = sequelize.define('cart',
    {
        id_cart: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_product: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'productModel', // Modèle Sequelize de la table Products
                key: 'id_product', // Colonne de référence dans la table Products
            },
        },
    }, {

    tableName: 'cart',

});

module.exports = Cart;