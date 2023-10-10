const express = require("express");

const {
  signUp,
  logIn,
  getAllUsers,
  getOneUser,
  deleteUser,
  updateUser,
} = require("../controllers/UserController");

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", logIn);
router.get("/users", getAllUsers);
router.get("/user/:id", getOneUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

module.exports = router;
