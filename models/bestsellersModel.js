const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Bestsellers = sequelize.define('bestsellers', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    productId: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Products',
            key: 'product_id',
        },
    },

}, {
    tableName: 'bestsellers'
});

module.exports = Bestsellers;