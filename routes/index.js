var express = require('express');
var router = express.Router();
const indexCtrl = require("../controller/index");

// // GET for index page
router.get("/", indexCtrl.getIndexPage);


module.exports = router;