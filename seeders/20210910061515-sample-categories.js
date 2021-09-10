"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          title: "Technical",
          slug: "technical",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Aptitude",
          slug: "aptitude",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Logical",
          slug: "logical",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
