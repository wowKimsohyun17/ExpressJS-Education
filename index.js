
const express = require("express");
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

var booksRoute = require('./routes/books.route');
var transRoute = require('./routes/transactions.route');
var usersRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var authRequire = require('./middleware/auth.middleware');

app.get("/", (request, response) => {
  response.cookie('user-id', 1999);
  response.render('index');
});

app.use('/books', booksRoute);
app.use('/transactions', transRoute);
app.use('/users', authRequire.requireAuth, usersRoute);
app.use('/auth', authRoute);

// listen for requests :)
const listener = app.listen( port, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
