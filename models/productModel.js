const { DataTypes } = require("sequelize");

const sequelize = require("../database/db");


const Product = sequelize.define(
  "products",
  {
    id_product: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    product_image: {
      type: DataTypes.STRING(150),
    },
    product_short_desc: {
      type: DataTypes.STRING(250),
    },
    product_description: {
      type: DataTypes.TEXT,
    },
    product_price: {
      type: DataTypes.DECIMAL(4, 2),
      allowNull: false,
    },
    product_stock: {
      type: DataTypes.INTEGER,
    },
    id_water: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_heat: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_sunlight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_level: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "products",
    underscored: true,
  }
);

module.exports = Product;
