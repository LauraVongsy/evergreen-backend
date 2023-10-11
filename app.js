const express = require("express");

const app = express();

const db = require("./database/db");

// Parsing req avec Express
app.use(express.json({ limit: "1mb" }));

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const blogRoutes = require("./routes/blogRoutes")
const cartRoutes = require("./routes/cartRoutes")

app.use("/api/auth", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/cart", cartRoutes);

module.exports = app;
