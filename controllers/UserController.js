const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const User = require("../models/userModel");

exports.signUp = async (req, res) => {
    try {
        const { email, user_password, last_name, first_name } = req.body;
        console.log(req.body);
        const hash = await bcrypt.hash(user_password, 10);


        const user = await User.create({
            email,
            user_password: hash,
            first_name,
            last_name,
            id_role: 2,
        });

        console.log(user);
        res.status(201).json({
            userId: user.id_user,
            token: jwt.sign({ userId: user.id_role }, process.env.JWT, {
                expiresIn: "24h"
            }),
            message: "Utilisateur créé"
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}