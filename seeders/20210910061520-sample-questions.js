"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "questions",
      [
        {
          question: "Display `Hello World` to the console in Javascript",
          options: JSON.stringify([
            { text: "console.log(Hello World)" },
            { text: "alert('Hello World')" },
            { text: "document.write('Hello World')" },
            { text: "console.log('Hello World')", correct: true },
          ]),
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "What is dog in French",
          options: JSON.stringify([
            { text: "cheval" },
            { text: "chien", correct: true },
            { text: "chat" },
            { text: "garçon" },
          ]),
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "What is `the boy` in French",
          options: JSON.stringify([
            {
              text: "le garçon",
              correct: true,
            },
            { text: "l'homme" },
            { text: "la garçon" },
            { text: "la femme" },
          ]),
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          question: "What's the result of 2*8",
          options: JSON.stringify([
            { text: 4 },
            { text: 24 },
            { text: 2 },
            { text: 16, correct: true },
          ]),
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("questions", null, {});
  },
};
