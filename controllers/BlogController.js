const Blog = require("../models/blogModel");

exports.getOneBlog = async (req, res) => {
    try {
        const blog_article = await Blog.findOne({ where: { id_article: req.param.id } });
        console.log(blog_article);
        res.status(201).json(blog_article, { message: "article trouvé" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
exports.getAllBlog = async (req, res) => {
    try {
        const blog_article = await Blog.findAll();
        console.log(blog_article);
        res.status(201).json(blog_article, { message: "articles trouvés" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.createBlog = async (req, res) => {
    const newArticle = req.body;
    try {
        const article = await Blog.create(
            {
                id_article: newArticle.id_article,
                article_title: newArticle.article_title,
                article_description: newArticle.article_description,
                article_picture: newArticle.article_picture,
                article_product: newArticle.article_product
            }
        )
        res.status(201).json(article, { message: "article crée" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.updateBlog = async (req, res) => {
    try {
        const blog_article = await Blog.update({ where: { id_article: req.param.id } });
        console.log(blog_article);
        res.status(201).json(blog_article, { message: "article mis à jour" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.deleteBlog = async (req, res) => {
    try {
        const blog_article = await Blog.destroy({ where: { id_article: req.param.id } });
        console.log(blog_article);
        res.status(201).json(blog_article, { message: "article supprimé" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
