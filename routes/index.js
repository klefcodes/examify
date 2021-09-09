const { Router } = require("express");
const router = Router();

router.get("/", function (req, res, next) {
  res.json({ msg: "Welcome to the exam api" });
});

module.exports = router;
