const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");


const Heat = sequelize.define("heat", {
    id_heat: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    libelle_heat: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },

}, {
    tableName: 'heat'
});

module.exports = Heat;
