// REQUIRES MONGOOSE
var mongoose = require("mongoose");
// CONNECTS TO A LOCAL BOOK-APP DATABASE URI
mongoose.connect("mongodb://localhost/book-app");


// EXPORT BOOK MODEL INTO BOOK.JS
module.exports.Book = require("./book.js");
