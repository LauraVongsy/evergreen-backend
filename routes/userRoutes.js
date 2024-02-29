const express = require("express");
const auth = require("../middlewares/auth")

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
router.get("/users", auth, getAllUsers);
router.get("/user/:id", auth, getOneUser);
router.put("/user/:id", auth, updateUser);
router.delete("/user/:id", auth, deleteUser);

module.exports = router;
