const { Question } = require("../models");

module.exports.storeQuestion = async (payload) => {
  return await Question.create(payload);
};
