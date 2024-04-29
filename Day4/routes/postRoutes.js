const express = require('express');

let Router = express.Router()
const {createPost,getPost,manuallyAddPost}=require("../controllers/postController")



Router.get('/generator',createPost );
Router.get('',getPost)

Router.post('/add',manuallyAddPost);

module.exports = Router