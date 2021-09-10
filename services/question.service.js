const { Question, Category } = require("../models");

module.exports.storeQuestion = async (payload) => {
  return await Question.create(payload);
};

module.exports.getAll = async () => {
  return await Question.findAll({
    include: [
      {
        as: "category",
        model: Category,
      },
    ],
  });
};
