var express = require('express');
var router = express.Router();
const api = require('../modules/api');

router.post('/postdriverinfo', api.postdriverinfo);
router.get('/getdriverinfo/:id', api.getdriverinfo);
router.post('/postdrivercontent', api.postdrivercontent);
router.get('/getdrivercontent/:id', api.getdrivercontent);

module.exports = router;
