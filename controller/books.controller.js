var db = require('../db');

module.exports.books = function(request, response){
  var books = db.get('books').value();
  response.render('../views/book/books', {
    books: books
  });
};

module.exports.create = function(req, res){
  res.render('../views/book/create')
};

module.exports.view = function(req, res){
  var id = parseInt(req.params.id);
  var book = db.get('books').find({id: id}).value();
  res.render('../views/book/view', {
    book: book
  })
};

module.exports.edit = function(req, res){
  var id = parseInt(req.params.id);
  var book = db.get('books').find({id: id}).value();
  res.render('../views/book/edit', {
    book: book
  })
};

module.exports.delete = function(req, res){
  var id = parseInt(req.params.id);
  var book = db.get('books').find({id: id}).value();
  db.get('books').remove(book).write();
  res.redirect('/books');
};

module.exports.postEdit = function(req, res){
  var id = parseInt(req.params.id);
  var title = req.body.title;
  const updatedBook = db.get('books').find({id: id}).assign({title: title}).write();
  console.log(updatedBook);
  res.redirect('/books');
};

module.exports.postCreate = function(req, res){
  var books = db.get('books').value();
  var title = req.body.title;
  var description = req.body.description;
  var newBook = {
    id: (books[books.length - 1].id + 1),
    title: title,
    description: description
  };
  db.get('books').push(newBook).write();
  res.redirect('/books');
};

module.exports.postComplete = function(req, res){
  var id = req.body.id
};