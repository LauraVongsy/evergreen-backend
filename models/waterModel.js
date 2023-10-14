const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");


const Water = sequelize.define("water", {
    id_water: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    libelle_water: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },

}, {
    tableName: 'water'
});

module.exports = Water;
