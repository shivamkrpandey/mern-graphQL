const mongoose = require('mongoose');
const {Schema} = mongoose;
const ObjectID = require('mongodb').ObjectID;
const bookSchema = new Schema({
    name: String,
    genre: String,
    authorId: String,
});

module.exports = mongoose.model('Book', bookSchema)
