const { Router } = require("express");
const {
  store,
  show,
  edit,
  destroy,
} = require("../controllers/question.controller");
const router = Router();

router
  .get("/", store)
  .get("/:id", show)
  .post("/", store)
  .patch("/:id", edit)
  .delete("/:id", destroy);

module.exports = router;
