const jwt = require("jsonwebtoken");


module.exports = async (req, res, next) => {
    try {
        // Verifiaction de la validité du token pour s'authentifier
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.JWT);
        const { userId, role } = decodedToken;

        if (role === 1) {
            // L'utilisateur a le rôle d'administrateur, autoriser l'accès
            next();
        }

    } catch (error) {
        await res.status(401).json({ message: error.message | "Requête non authentifiée" });
    }
};