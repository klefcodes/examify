const { Router } = require("express");
// Controller
const {
  index,
  store,
  edit,
  destroy,
} = require("../controllers/question.controller");
// Middleware
const {
  storeQuestionRequest,
  editQuestionRequest,
  deleteQuestionRequest,
} = require("../middleware/validator");

const router = Router();

/**
 * @swagger
 *  components:
 *    schemas:
 *      Question:
 *        type: object
 *        required:
 *          - question
 *          - options
 *          - category_id
 *        properties:
 *          id:
 *            type: integer
 *            description: The auto-generated id of the question.
 *          question:
 *            type: string
 *            description: The question to ask.
 *          options:
 *            type: array
 *            description: The array of options of the question.
 *          category_id:
 *            type: integer
 *            description: The category the question belongs to.
 *          created_at:
 *            type: string
 *            format: date
 *            description: The date of the record creation.
 *          updated_at:
 *            type: string
 *            format: date
 *            description: The date of when the question is updated.
 *        example:
 *           question: What's la femme in French?
 *           options: [
 *             { text: "The girl" },
 *             { text: "The boy" },
 *             { text: "The woman", correct: true},
 *             { text: "The man" }
 *           ]
 *           category_id: 2
 */

/**
 * @swagger
 * tags:
 *   name: Questions
 *   description: API to manage your questions.
 */

/**
 * @swagger
 * /api/questions:
 *   get:
 *     summary: Retrieve a list of questions.
 *     description: Retrieve a list of users from the database.
 *     tags: [Questions]
 *     responses:
 *       200:
 *         description: A list of questions.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The question ID.
 *                         example: 1
 *                       question:
 *                         type: string
 *                         description: The question needed to be asked.
 *                         example: What's the result of 2 * 8
 *                       options:
 *                         type: array
 *                         items:
 *                            type: object
 *                            properties:
 *                              text:
 *                                type: string
 *                              correct:
 *                                type: boolean
 *                            example:
 *                              - text: 8
 *                              - text: 16
 *                                correct: true
 *                              - text: 4
 *                              - text: 10
 *                       category_id:
 *                          type: integer
 *                          description: The id of the category.
 *                          example: 3
 */

/**
 * @swagger
 * /api/questions:
 *   post:
 *     summary: Create a question.
 *     description: Create a question with the following properties below.
 *     tags: [Questions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *                 example: What's the result of 2 * 8
 *               options:
 *                         type: array
 *                         items:
 *                            type: object
 *                            properties:
 *                              text:
 *                                type: string
 *                              correct:
 *                                type: boolean
 *                            example:
 *                              - text: 8
 *                              - text: 16
 *                                correct: true
 *                              - text: 4
 *                              - text: 10
 *               category_id:
 *                          type: integer
 *                          description: The id of the category.
 *                          example: 3
 *     responses:
 *       201:
 *         description: Question created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                       id:
 *                         type: integer
 *                         description: The question ID.
 *                         example: 1
 *                       question:
 *                         type: string
 *                         description: The question needed to be asked.
 *                         example: What's the result of 2 * 8
 *                       options:
 *                         type: array
 *                         items:
 *                            type: object
 *                            properties:
 *                              text:
 *                                type: string
 *                              correct:
 *                                type: boolean
 *                            example:
 *                              - text: 8
 *                              - text: 16
 *                                correct: true
 *                              - text: 4
 *                              - text: 10
 *                       category_id:
 *                          type: integer
 *                          description: The id of the category.
 *                          example: 3
 */

/**
 * @swagger
 * /api/questions/{id}:
 *   patch:
 *     summary: Update a question.
 *     description: Update a question with the following properties below.
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the question to update.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Question updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                       id:
 *                         type: integer
 *                         description: The question ID.
 *                         example: 1
 *                       question:
 *                         type: string
 *                         description: The question needed to be asked.
 *                         example: What's the result of 2 * 8
 *                       options:
 *                         type: array
 *                         items:
 *                            type: object
 *                            properties:
 *                              text:
 *                                type: string
 *                              correct:
 *                                type: boolean
 *                            example:
 *                              - text: 8
 *                              - text: 16
 *                                correct: true
 *                              - text: 4
 *                              - text: 10
 *                       category_id:
 *                          type: integer
 *                          description: The id of the category.
 *                          example: 3
 */

/**
 * @swagger
 * /api/questions/{id}:
 *   delete:
 *     summary: Delete a question.
 *     description: Delete a question with the following properties below.
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the question to be deleted.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Question deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                       message:
 *                         type: integer
 *                         description: The success message.
 *                         example: Question deleted successfully.
 */

router
  .get("/", index)
  .post("/", storeQuestionRequest(), store)
  .patch("/:id", editQuestionRequest(), edit)
  .delete("/:id", deleteQuestionRequest(), destroy);

module.exports = router;
