const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/anant').then((e)=>console.log("db Connected"))