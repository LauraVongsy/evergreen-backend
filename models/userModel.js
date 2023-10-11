const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("mysql::memory:");
const sequelize = require("../database/db");

const User = sequelize.define(
    "users",
    {
        id_role: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "roles",
                key: "id",
            },
        },
        id_user: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        user_password: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        telephone: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        address_street: {
            type: DataTypes.STRING(150),
            allowNull: true,
        },
        address_city: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        address_zipcode: {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        address_country: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
    },
    {
        tableName: "users",

        underscored: true, // Utiliser des noms de colonnes avec des underscores
    }
);

module.exports = User;
