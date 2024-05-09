const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      validate: {
        validator: (value) => value.length > 2,
        message: 'Title must be at least 3 characters long'
      }
    },
    author: {
        type: String,
        required: true,
        validate: {
          validator: (value) => value.length > 2,
          message: 'Author must be at least 3 characters long'
        }
      },
      year: {
        type: Number,
        required: true,
       
      },
    
  });

module.exports = mongoose.model('book',bookSchema)