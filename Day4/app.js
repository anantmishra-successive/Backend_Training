const express = require('express');
const { faker } = require('@faker-js/faker');
const {logRequestDetails} = require('./middlewares/logrequestdetails')
const { errorHandler } = require('./middlewares/errorHandler')
const { customHeaderMiddleware } = require('./middlewares/customHeaderMiddleware')
const {rateLimitMiddleware} = require('./middlewares/rateLimitMiddleware')
const authRouter=require("./routes/authenticationRoute")
const app = express();
const PORT =  3000;
const postRoutes=require("./routes/postRoutes")

app.use(express.json());
app.use(logRequestDetails)
app.use(customHeaderMiddleware)
// app.use(rateLimitMiddleware)
app.use('/posts',postRoutes)
app.use("/auth",authRouter)

app.get('/custom',rateLimitMiddleware,(req,res,next)=>{
  res.send("hello world");
})
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