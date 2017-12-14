//   models/author.js
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


// variable for creating new authors with attributs: AuthorSchema
var AuthorSchema = new Schema({
  name: String,
  alive: Boolean,
  image: String
});

// creates Author model from the schema
var Author = mongoose.model('Author', AuthorSchema);

// export the Author model
module.exports = Author;
