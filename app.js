const express = require('express');

const app = express();

const db = require('./database/db');

// Parsing req avec Express
app.use(express.json({ limit: "1mb" }));

const userRoutes = require("./routes/userRoute");

app.use("/api/auth", userRoutes);

module.exports = app;