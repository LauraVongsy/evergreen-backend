const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");


const Sunlight = sequelize.define("sunlight", {
    id_sunlight: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    libelle_sunlight: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },

}, {
    tableName: 'sunlight'
});

module.exports = Sunlight;
