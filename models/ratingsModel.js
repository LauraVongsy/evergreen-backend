const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Rating = sequelize.define(
  "ratings",
  {
    rating_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    id_user: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id_user",
      },
      allowNull: false,
    },
    id_product: {
      type: DataTypes.INTEGER,
      references: {
        model: "products",
        key: "id_product",
      },
      allowNull: false,
    },
  },
  {
    tableName: "ratings",
  }
);

module.exports = Rating;
