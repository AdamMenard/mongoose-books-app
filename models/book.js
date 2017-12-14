var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// CREATE SCHEMA
var BookSchema = new Schema({
      title: String,
      author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
      },                          // ends author key: object pair
      image: String,
      releaseDate: String // could be: Date
});

var Book = mongoose.model('Book', BookSchema);


// EXPORTS
 module.exports = Book;
