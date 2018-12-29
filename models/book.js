const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id: String,
  title: String,
  authors: [String],
  description: String,
  image: String,
  link: String,
  publishedDate : Date,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

