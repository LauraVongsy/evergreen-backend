const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");


const UserRates = sequelize.define("user_rates", {
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'userModel', // Modèle Sequelize de la table Products
            key: 'id_user', // Colonne de référence dans la table Products
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
    tableName: 'user_rates'
});

module.exports = UserRates;
