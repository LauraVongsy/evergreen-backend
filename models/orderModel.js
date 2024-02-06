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
        defaultValue: 'carte bancaire',
    },
    payment_reference: {
        type: DataTypes.STRING(150),
        unique: true,
        defaultValue: DataTypes.UUIDV4,
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'userModel',
            key: 'id_user',
        }
    }
}, {
    tableName: 'orders',
});

// Ajouter une relation pour les items de panier (CartItem)
Order.hasMany(CartItem, { as: 'cartItems', foreignKey: 'id_order' });

// Modifier le modèle CartItem en conséquence
const CartItem = sequelize.define('cartItem', {
    id_cart_item: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

// Ajouter une relation pour le modèle CartItem
CartItem.belongsTo(Order, { foreignKey: 'id_order' });

module.exports = Order;