var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// for adding new: books
var BookSchema = new Schema({
  title: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  image: String,
  releaseDate: String
        // below is for: multiple embedded items in an array
  characters: [CharacterSchema]
        // below is for: if you want one embedded item
  mainCharacter: CharacterSchema
});

// for adding new: characters
var CharacterSchema = new Schema({
  name: String
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;
