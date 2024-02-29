const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const ArticleBlog = sequelize.define('blog_articles', {
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

    tableName: 'blog_articles',

});



module.exports = ArticleBlog;