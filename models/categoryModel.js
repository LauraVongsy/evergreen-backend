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
  category_picture: {
    type: DataTypes.STRING(50)
  }
}, {
  tableName: 'categories',
  timestamps: false
});

module.exports = Category;
