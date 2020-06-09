var express = require('express');
var router = express.Router();

var controller = require('../controller/users.controller');
var validate = require('../validate/user.validate');
var countCookies = require('../middleware/countCookies');

router.get('/', countCookies.countCookies, controller.index);

router.get('/create', countCookies.countCookies, controller.create);

router.post('/create', countCookies.countCookies, validate.postCreate , controller.postCreate);

module.exports = router;