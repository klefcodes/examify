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
} = require("../middleware/validator");

const router = Router();

router
  .get("/", index)
  .post("/", storeQuestionRequest(), store)
  .patch("/:id", editQuestionRequest(), edit)
  .delete("/:id", destroy);

module.exports = router;
