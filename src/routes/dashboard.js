var express = require("express");
var router = express.Router();
var dashboardController = require("../controllers/dashboard");

router.get("/resultadoPersonagem", dashboardController.resultadoPersonagem);
router.get("/mediaAcertosErros", dashboardController.mediaAcertosErros);
router.get("/desenhoAviador", dashboardController.desenhoAviador);

module.exports = router;