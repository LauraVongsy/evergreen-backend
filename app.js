const express = require("express");

const app = express();

const db = require("./database/db");

//  CORS headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Parsing req avec Express
app.use(express.json({ limit: "1mb" }));

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const blogRoutes = require("./routes/blogRoutes");
// const cartRoutes = require("./routes/cartRoutes");
const bestsellerRoutes = require("./routes/bestsellerRoutes");

app.use("/api/auth", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/blog", blogRoutes);
// app.use("/api/cart", cartRoutes);
app.use("/api/bestsellers", bestsellerRoutes);


module.exports = app;
