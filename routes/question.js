const { Router } = require("express");
// Controller
const {
  index,
  store,
  show,
  edit,
  destroy,
} = require("../controllers/question.controller");
// Middleware
const { storeQuestionRequest } = require("../middleware/validator");

const router = Router();

router
  .get("/", index)
  .get("/:id", show)
  .post("/", storeQuestionRequest(), store)
  .patch("/:id", edit)
  .delete("/:id", destroy);

module.exports = router;
