"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          title: "Technical",
          slug: "technical",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Aptitude",
          slug: "aptitude",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Logical",
          slug: "logical",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
