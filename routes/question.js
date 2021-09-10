const { Router } = require("express");
// Controller
const {
  store,
  show,
  edit,
  destroy,
} = require("../controllers/question.controller");
// Middleware
const { storeQuestionRequest } = require("../middleware/validator");

const router = Router();

router
  .get("/", store)
  .get("/:id", show)
  .post("/", storeQuestionRequest(), store)
  .patch("/:id", edit)
  .delete("/:id", destroy);

module.exports = router;
