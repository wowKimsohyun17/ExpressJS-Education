var db = require('../db');

module.exports.countCookies = function(req, res, next){
  var count = db.get('count').value();
  db.update('count', n => n + 1)
  .write()
  console.log(req.cookies,count)
  next();
}