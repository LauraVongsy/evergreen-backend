const Rating = require("../models/ratingsModel");

exports.getOneRating = async (req, res) => {
  try {
    const rating = Rating.findOne({ where: { id_rating: req.param.id } });
    await res.status(200).json(rating);
  } catch (err) {
    await res.status(400).json({ message: err.message });
  }
};

exports.getAllRatings = async (res, req) => {
  try {
    const ratings = Rating.findAll();
    await res.status(200).json(ratings);
  } catch (err) {
    await res.status(400).json({ message: err.message });
  }
};

exports.createRating = async (req, res) => {
  const rating = req.body;
  try {
    const newRating = Rating.create({
      rating_id: rating.rating_id,
      rating: rating.rating,
      date: rating.date,
      id_user: rating.id_user,
      id_product: rating.id_product,
    });
    await res.status(200).json(newRating);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateRating = async (req, res) => {
  const newRating = req.body;
  try {
    const rating = Rating.update(newRating, {
      where: { id_rating: req.param.id },
    });
    await res.status(200).json(rating);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteRating = async (req, res) => {
  try {
    const rating = Rating.destroy({ where: { id_rating: req.param.id } });
    await res.status(200).json(rating);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
