var express = require('express');
var router = express.Router();

var controller = require('../controller/users.controller');
var validate = require('../validate/user.validate');
var countCookies = require('../middleware/countCookies');
var requireAuth = require('../middleware/auth.middleware');

router.get('/', controller.index);

router.get('/create', countCookies.countCookies, controller.create);

router.post('/create', countCookies.countCookies, validate.postCreate , controller.postCreate);

module.exports = router;