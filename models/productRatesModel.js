const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");


const ProductRates = sequelize.define("product_rates", {
    id_product: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'productModel', // Modèle Sequelize de la table Products
            key: 'id_product', // Colonne de référence dans la table Products
        }
    },
    id_rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'ratingsModel', // Modèle Sequelize de la table Products
            key: 'id_rating', // Colonne de référence dans la table Products
        }
    }
}, {
    tableName: 'product_rates'
});

module.exports = ProductRates;
