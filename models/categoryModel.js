const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mysql::memory:");

const Category = sequelize.define("category", {
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
});

module.exports = Category;
