var express = require('express');
var router = express.Router();

var controller = require('../controller/books.controller');

router.get("/", controller.books);

router.get("/create", controller.create);

router.get("/:id/view", controller.view);

router.get("/:id/edit", controller.edit);

router.get("/:id/delete", controller.delete);
  
router.post("/:id/edit", controller.postEdit);

router.post("/create", controller.postCreate);

module.exports = router;