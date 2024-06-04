const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    country:String,
    continent:String
})


module.exports = mongoose.model('country',productSchema)