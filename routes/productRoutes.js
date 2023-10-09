const express = require("express");

const { getOneProduct } = require("../controllers/UserController");

const router = express.Router();

router.get("/:id", getOneProduct);

module.exports = router;
