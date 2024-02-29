const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../models/userModel");

exports.signUp = async (req, res) => {
  try {
    const { email, password, userLastname, userFirstname } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      email: email,
      user_password: hash,
      first_name: userFirstname,
      last_name: userLastname,
      id_role: 2,
    });

    res.status(201).json({
      userId: user.id_user,
      userFirstname: user.first_name,
      userLastname: user.last_name,
      token: jwt.sign({ userId: user.id_user, role: user.id_role }, process.env.JWT, {
        expiresIn: "24h",
      }),
      message: "Utilisateur créé",
    });
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur:', error);
    return res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur' });
  }
};

// connexion;
exports.logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Recherche l'utilisateur par e-mail
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    // Compare le mot de passe fourni avec le mot de passe haché stocké
    const validPassword = await bcrypt.compare(password, user.user_password);

    if (!validPassword) {
      return res.status(400).json({ message: "Mot de passe invalide" });
    }

    // Génère le token JWT et renvoie la réponse
    res.status(200).json({
      userId: user.id_user,
      userFirstname: user.first_name,
      userLastname: user.last_name,
      token: jwt.sign({ userId: user.id_user, role: user.id_role }, process.env.JWT, {
        expiresIn: "24h",
      }),
    });

  } catch (err) {
    console.error('Erreur lors de la requête d\'authentification:', err);
    res.status(500).json({ message: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    console.log(users);
    await res.status(200).json(users);
  } catch (err) {
    await res.status(500).json({ message: err.message });
  }
};

exports.getOneUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id_user: req.params.id } });
    await res.status(200).json(user);
  } catch (err) {
    await res.status(404).json({ message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    //trouver comment faire pour que l'admin puisse supprimer et que l'utilisateur puisse

    const user = await User.update({
      where: {
        id_user: req.params.id,
      },
    });
    await res.status(200).json({ message: "Utilisateur updaté" });
  } catch (err) {
    await res.status(500).json({ message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    //trouver comment faire pour que l'admin puisse supprimer et que l'utilisateur puisse

    const user = await User.destroy({
      where: {
        id_user: req.params.id,
      },
    });
    await res.status(200).json({ message: "Utilisateur supprimé" });
  } catch (err) {
    await res.status(500).json({ message: err.message });
  }
};
