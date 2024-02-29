const jwt = require("jsonwebtoken");

// Verifiaction de la validité du token pour s'authentifier
module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);
        const { userId, role } = decodedToken;

        req.auth = { userId, role };
        if (userRole === 1) {
            // L'utilisateur a le rôle d'administrateur, autoriser l'accès
            next();
        }
        if (req.body.userId && req.body.userId !== userId) {
            throw "User ID non valide";
        } else {
            next();
        }
    } catch (error) {
        await res.status(401).json({ message: error.message | "Requête non authentifiée" });
    }
};