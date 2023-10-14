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
    }
  },
  {
    tableName: "ratings",
  }
);

module.exports = Rating;
