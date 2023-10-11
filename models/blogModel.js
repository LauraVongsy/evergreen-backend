const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const ArticleBlog = sequelize.define('article_blog', {
    id_article: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    article_title: {
        type: DataTypes.STRING(100),
    },
    article_description: {
        type: DataTypes.TEXT,
    },
    article_picture: {
        type: DataTypes.STRING(150),
    },
    article_product: {
        type: DataTypes.STRING(150),
    },
}, {

    tableName: 'article_blog', // Le nom de la table dans la base de données

});

// Si vous avez besoin de définir des associations avec d'autres modèles Sequelize, vous pouvez le faire ici

module.exports = ArticleBlog;