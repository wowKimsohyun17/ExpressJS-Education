var db = require('../db');

module.exports.index = function(req, res){
  var users = db.get('users').value();
  var q = req.query.q;
  if(q !== undefined){
    var matchedUsers = users.filter(function(item){
    return ((item.name.toLowerCase()).indexOf(q.toLowerCase()) !== -1);
    });
    res.render('../views/users/index', {
      users: matchedUsers,
      q: q
    });
  }else{
    res.render('../views/users/index', {
    users: users
  });
  }
};

module.exports.create = function(req, res){
  res.render('../views/users/create');
}

module.exports.postCreate = function(req, res){
  var users = db.get('users').value();
  var name = req.body.name;
  var phone = req.body.phone;
  var newUser = {
    id: (users[users.length - 1].id + 1),
    name: name,
    phone: parseInt(phone)
  };
  db.get('users').push(newUser).write();
  res.redirect('/users');
}