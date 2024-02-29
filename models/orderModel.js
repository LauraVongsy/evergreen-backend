
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const User = require("./userModel");

const Order = sequelize.define('order', {
    id_order: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    total_price: {
        type: DataTypes.DECIMAL(5, 2),
    },
    delivery_address: {
        type: DataTypes.TEXT,
    },
    payment_method: {
        type: DataTypes.STRING(50),
        defaultValue: 'carte bancaire',
    },
    payment_reference: {
        type: DataTypes.STRING(150),
        unique: true,
        defaultValue: DataTypes.UUIDV4,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'user',
            key: 'id_user',
        },
    }
}, {
    tableName: 'order',
});

Order.belongsTo(User, { foreignKey: 'id_user' });

module.exports = Order;