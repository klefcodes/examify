const { Question, Category } = require("../models");

module.exports.storeQuestion = async (payload) => {
  return await Question.create(payload);
};

module.exports.editQuestion = async (id, payload) => {
  return await Question.update(payload, { where: { id } });
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

module.exports.retrieveQuestion = async (id) => {
  return await Question.findOne({
    where: { id },
    include: [
      {
        as: "category",
        model: Category,
      },
    ],
  });
};
