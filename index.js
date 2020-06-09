
const express = require("express");
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var db = require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

var booksRoute = require('./routes/books.route');
var transRoute = require('./routes/transactions.route');
var usersRoute = require('./routes/user.route');

app.get("/", (request, response) => {
  response.cookie('user-id', 1999);
  response.render('index');
});

// send the default array of dreams to the webpage
app.use('/books', booksRoute);
app.use('/transactions', transRoute);
app.use('/users', usersRoute)

// listen for requests :)
const listener = app.listen( port, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
