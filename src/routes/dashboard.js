var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboard");

router.get("/respostasImagem", dashboardController.respostasImagem);
router.get("/quiz2Resumo", dashboardController.quiz2Resumo);
router.get("/conselhosQuiz1", dashboardController.conselhosQuiz1);

module.exports = router;
