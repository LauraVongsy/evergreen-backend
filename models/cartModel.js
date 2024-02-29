const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const Product = require("./productModel");
const Order = require("./orderModel");
const User = require("./userModel");


const Cart = sequelize.define('cart', {
    id_cart: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    id_product: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'product',
            key: 'id_product',
        },
    },
    id_order: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'order',
            key: 'id_order',
        },
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'user',
            key: 'id_user',
        },
    }
},
    {
        tableName: 'cart',
    }
);

Cart.belongsTo(Order, { foreignKey: 'id_order' });
Cart.belongsTo(Product, { foreignKey: 'id_product' });
Cart.belongsTo(User, { foreignKey: 'id_user' });



module.exports = Cart;
