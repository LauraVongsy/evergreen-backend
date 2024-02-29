const Bestsellers = require("../models/bestsellersModel");
const Product = require("../models/productModel");


// Recupération des produits
exports.getAllBestsellers = async (req, res) => {
    try {
        const bestseller = await Bestsellers.findAll({
            include: Product
        });
        console.log(`voici les bestsellers`, bestseller);
        await res.status(200).json(bestseller);
    } catch (err) {
        await res.status(500).json({ message: err.message });
    }
};


// Récupération d'un produit par son ID
exports.getOneBestseller = async (req, res) => {
    try {
        const bestseller = await Bestsellers.findOne({
            where: { bestseller_id: req.params.id },
        });
        await res.status(200).json(bestseller);
    } catch (err) {
        await res.status(400).json({ message: err.message });
    }
};


//creation product
exports.createBestseller = async (req, res) => {
    try {
        const newBestseller = req.body;

        console.log(req.body);

        const bestseller = await Bestsellers.create({
            bestseller_id: newBestseller.bestseller_id,
            id_product: newBestseller.id_product,
        });

        console.log(bestseller);

        res.status(201).json({
            newBestseller,
            message: "bestseller créé",
        });
    } catch (err) {
        await res.status(400).json({ message: err.message });
    }
};

exports.updateBestseller = async (req, res) => {
    const updatedBestseller = req.body;
    try {
        const bestseller = await Bestsellers.findOne({
            where: { bestseller_id: req.params.id },
        });
        if (!bestseller) {
            return res.status(404).json({ message: "Bestseller non trouvé" });
        }
        await bestseller.update(updatedBestseller);
    } catch (err) {
        await res.status(400).json({ message: err.message });
    }
};

exports.deleteBestseller = async (req, res) => {
    try {
        const bestseller = await Bestsellers.findOne({
            where: { bestseller_id: req.params.id },
        });
        if (!bestseller) {
            return res.status(404).json({ message: "bestseller non trouvé" });
        }
        await bestseller.destroy();
        return res.status(200).json({ message: "bestseller supprimé avec succès" });
    } catch (err) {
        await res.status(400).json({ message: err.message });
    }
};