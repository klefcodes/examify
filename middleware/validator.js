const { check } = require("express-validator");
const { Category } = require("../models");

module.exports.storeQuestionRequest = (req, res, next) => {
  const isValidCategory = async (value) => {
    const category = await Category.findOne({ where: { id: value } });
    if (!category) {
      return Promise.reject("The provided category_id is not a valid category");
    }
  };

  return [
    check("question", "A question is required").exists().isString(),
    check("category_id", "A category is required")
      .exists()
      .isNumeric()
      .custom(isValidCategory),
    check("options", "Options is required").exists().isArray(),
  ];
};
