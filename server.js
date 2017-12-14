// server.js
// SERVER-SIDE JAVASCRIPT


/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express in our app
var express = require('express'),
  bodyParser = require('body-parser');

// require database
var db = require('./models');

// generate a new express app and call it 'app'
var app = express();

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));



////////////////////
//  DATA
///////////////////


/* DELETED ARRAY
var books = [
  {
    _id: 15,
    title: "The Four Hour Workweek",
    author: "Tim Ferriss",
    image: "https://s3-us-west-2.amazonaws.com/sandboxapi/four_hour_work_week.jpg",
    release_date: "April 1, 2007"
  },
  {
    _id: 16,
    title: "Of Mice and Men",
    author: "John Steinbeck",
    image: "https://s3-us-west-2.amazonaws.com/sandboxapi/of_mice_and_men.jpg",
    release_date: "Unknown 1937"
  },
  {
    _id: 17,
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    image: "https://s3-us-west-2.amazonaws.com/sandboxapi/romeo_and_juliet.jpg",
    release_date: "Unknown 1597"
  }
];

var newBookUUID = 18;
*/





////////////////////
//  ROUTES
///////////////////




// define a root route: localhost:3000/
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

// get all books
app.get('/api/books', function (req, res) {
  // send all books as JSON response
  db.Book.find(function(err, books){
    if (err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    }
    res.json(books);
  });
});

// GET ONE BOOK
app.get('/api/books/:id', function (req, res) {
        // * get book id from url parameters: req.params.id
  // find one book by its id
  db.Book.findById(req.params.id, function(err, idBook) {
    if (err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    }
    res.json(idBook);
  });
});

// CREATE NEW BOOK
app.post('/api/books', function (req, res) {
  // create new book with form data: ('req.body')
  db.Book.create(req.body, function(err, createBook) {
    if (err) {
      console.log("create error: " + err);
      res.sendStatus(500);
    }
    res.json(createBook)
  });
});

// UPDATE BOOK
app.put('/api/books/:id', function(req,res){
// * get book id from url parameters: req.params.id
  db.Book.findByIdAndUpdate(req.params.id, function(err, updatedBook) {
    if (err) {
      console.log("update error: " + err);
      res.sendStatus(500);
    }
    res.json(updatedBook);
  });
});

// DELETE BOOK
app.delete('/api/books/:id', function (req, res) {
  // * get book id from url parameters: req.params.id
  db.Book.findOneAndRemove(req.params.id, function(err, deletedBook) {
    if (err) {
      console.log("destroy error: " + err);
      res.sendStatus(500);
    }
    res.json(deletedBook);
  });
});


// PORT

app.listen(process.env.PORT || 3000, function () {
  console.log('Book app listening at http://localhost:3000/');
});
