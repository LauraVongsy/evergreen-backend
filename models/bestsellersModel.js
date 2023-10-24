const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const Product = require("./productModel");

const Bestsellers = sequelize.define('bestsellers', {
    bestseller_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_product: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'products',
            key: 'id_product',
        },
    },

}, {
    tableName: 'bestsellers',
    timestamps: false
});

Bestsellers.belongsTo(Product,
    {
        foreignKey: "id_product"
    })

module.exports = Bestsellers;