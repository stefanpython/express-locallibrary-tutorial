const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/cool", (req, res) => {
  res.send("<h1>You`re so cool</h1>");
});

module.exports = router;
