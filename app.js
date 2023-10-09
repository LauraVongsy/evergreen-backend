const express = require("express");

const app = express();

const db = require("./database/db");

// Parsing req avec Express
app.use(express.json({ limit: "1mb" }));

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

app.use("/api/auth", userRoutes);
app.use("/api/product", productRoutes);

module.exports = app;
