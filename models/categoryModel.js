const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");


const Category = sequelize.define("categories", {
  id_category: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  category_label: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  category_description: {
    type: DataTypes.STRING(250),
  },
}, {
  tableName: 'categories'
});

module.exports = Category;
