const { Category, Question } = require("../models");

module.exports.getAll = async () => {
  return await Category.findAll({
    include: [
      {
        as: "questions",
        model: Question,
      },
    ],
  });
};
