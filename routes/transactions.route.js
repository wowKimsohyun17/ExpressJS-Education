var express = require('express');
var router = express.Router();

var controller = require('../controller/transactions.controller');

router.get("/", controller.index);

router.get('/create', controller.create);

router.get('/:id/complete', controller.complete);

router.post('/create', controller.postCreate);



module.exports = router;