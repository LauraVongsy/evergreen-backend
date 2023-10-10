const Category = require("../models/categoryModel");

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    console.log(categories);
    await res.status(200).json(categories);
  } catch (err) {
    await res.status(500).json({ message: err.message });
  }
};

exports.getOneCategory = async (req, res) => {
  try {
    const category = await Category.findOne({
      where: { id_category: req.param.id },
    });
    console.log(categories);
    await res.status(200).json(category);
  } catch (err) {
    await res.status(500).json({ message: err.message });
  }
};

exports.createCategory = async (req, res) => {
  const newCategory = req.body;
  try {
    const category = await Category.create({
      category_id: newCategory.category_id, //modifier en id_category en bdd
      category_label: newCategory.category_label,
      category_description: newCategory.category_description,
    });

    res.status(201).json({ category, message: "catégorie créee" });
  } catch (err) {
    await res.status(400).json({ message: err.message });
  }
};

exports.updateCategory = async (req, res) => {
  const updatedCategory = req.body;
  try {
    const category = await Category.findOne({
      where: { category_id: req.params.id },
    });
    if (!category) {
      return res.status(404).json({ message: "categorie non trouvée" });
    }
    await category.update(updatedCategory);
    res.status(201).json({ category, message: "catégorie mise à jour" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findOne({
      where: { category_id: req.params.id },
    });
    if (!category) {
      return res.status(404).json({ message: "categorie non trouvée" });
    }
    await category.destroy();
    res.status(201).json({ category, message: "catégorie supprimée" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
