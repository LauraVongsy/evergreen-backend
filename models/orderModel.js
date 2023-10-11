const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Order = sequelize.define('order', {
    id_order: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    order_date: {
        type: DataTypes.DATE,
    },
    total_price: {
        type: DataTypes.DECIMAL(5, 2),
    },
    delivery_address: {
        type: DataTypes.TEXT,
    },
    payment_method: {
        type: DataTypes.STRING(50),
    },
    payment_reference: {
        type: DataTypes.STRING(150)
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'userModel', // Modèle Sequelize de la table Products
            key: 'id_user', // Colonne de référence dans la table Products
        }
    }
}, {

    tableName: 'orders',

}

);

module.exports = Order;