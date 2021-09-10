const { validationResult } = require("express-validator");
const { storeQuestion, getAll } = require("../services/question.service");

module.exports.index = async (req, res) => {
  try {
    const questions = await getAll();
    return res.json({ questions });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.store = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ errors: errors.array({ onlyFirstError: true }) });
  }
  try {
    const { question, options, category_id } = req.body;
    const created = await storeQuestion({ question, options, category_id });
    return res.status(201).json({ created });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.show = async (req, res) => {};

module.exports.edit = async (req, res) => {};

module.exports.destroy = async (req, res) => {};
