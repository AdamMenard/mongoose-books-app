var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// CREATE SCHEMA
var BookSchema = new Schema({
      title: String,
      author: String,
      image: String,
      releaseDate: Date
});

var Book = mongoose.model('Book', BookSchema);


// EXPORTS
 module.exports = Book;
