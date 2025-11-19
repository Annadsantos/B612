var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizzControler");

router.post("/salvarResultado", function (req, res) {
    quizController.salvarResultado(req, res);
});

module.exports = router;
