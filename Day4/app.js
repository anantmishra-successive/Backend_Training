const express = require('express');
const { faker } = require('@faker-js/faker');
const {logRequestDetails} = require('./middlewares/logrequestdetails')
const { errorHandler } = require('./middlewares/errorHandler')
const app = express();
const PORT =  3000;
const postRoutes=require("./routes/postRoutes")

app.use(express.json());
app.use(logRequestDetails)
app.use('/posts',postRoutes)
app.get('*',(req,res,next)=>{
  try {
    throw new Error('Something went wrong! fix it');
 } catch (err) {
   next(err); 
 }
})
app.get('/error', (req, res, next) => {
  try {
     throw new Error('Something went wrong!');
  } catch (err) {
    next(err); 
  }
});


app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});