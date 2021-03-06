const { validationResult } = require("express-validator");
const {
  storeQuestion,
  getAll,
  editQuestion,
  retrieveQuestion,
  deleteQuestion,
} = require("../services/question.service");

module.exports.index = async (req, res) => {
  try {
    const questions = await getAll();
    return res.json(questions);
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

module.exports.edit = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ errors: errors.array({ onlyFirstError: true }) });
  }
  try {
    const { id } = req.params;
    const { question, options, category_id } = req.body;
    await editQuestion(id, { question, options, category_id });

    const updateQuestion = await retrieveQuestion(id);
    return res.json(updateQuestion);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.destroy = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ errors: errors.array({ onlyFirstError: true }) });
  }
  try {
    const { id } = req.params;
    await deleteQuestion(id);

    return res.json({ message: "Question deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
