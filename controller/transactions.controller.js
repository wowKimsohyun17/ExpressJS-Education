var db = require('../db');

module.exports.index = (request, response) => {
  var trans = db.get('transactions').value();
  response.render('../views/transactions/trans', {
    trans: trans
  })
};

module.exports.create = (req, res) => {
  var users = db.get('users').value();
  var books = db.get('books').value();
  res.render('../views/transactions/create', {
    users: users,
    books: books
  })
};

module.exports.complete = function(req, res){
  var id = parseInt(req.params.id);
  var updatedBook = db.get('transactions').find({id: id}).assign({isComplete: true}).write();
  var test = db.get('transactions').find({id: id}).value();
  var errors = [];
  if(!test){
    errors.push('ID not found');
  }
  
  if(errors.length){
    res.render('../views/transactions/trans', {
      errors: errors
    })
    return;
  }
  
  res.redirect('/transactions');
};

module.exports.postCreate = function(req, res){
  var trans = db.get('transactions').value();
  var userID = req.body.userID;
  var bookID = req.body.bookID;
  var newTrans = {
    id: (trans[trans.length - 1].id + 1),
    userID: userID,
    bookID: bookID
  };
  db.get('transactions').push(newTrans).write();
  res.redirect('/transactions');
};

