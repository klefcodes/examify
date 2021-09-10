const { Router } = require("express");
const { index, show } = require("../controllers/category.controller");
const router = Router();

router.get("/", index).get("/:id", show);

module.exports = router;
