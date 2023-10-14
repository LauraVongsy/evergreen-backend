const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");


const Level = sequelize.define("levels", {
    id_level: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    description: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },

}, {
    tableName: 'levels'
});

module.exports = Level;
