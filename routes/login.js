var express = require('express');
var router = express.Router();
const loginCtrl = require("../controller/login");

router.get("/login", loginCtrl.getLoginPage);


module.exports = router;