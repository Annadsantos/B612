var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboard");

router.get("/respostasImagem", dashboardController.respostasImagem);
router.get("/resultadoPersonagem", dashboardController.resultadoPersonagem);
router.get("/quiz2Resumo", dashboardController.quiz2Resumo);

module.exports = router;
