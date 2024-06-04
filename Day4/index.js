const express = require('express');
const app = express();


const logDetails = (req, res, next) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  next(); 
};
const checkAuth = (req, res, next) => {
 
  const isAuthenticated = true; 
  if (isAuthenticated) {
    console.log('User is authenticated');
    next(); 
  } else {
    res.status(401).send('User is not authenticated'); 
  }
};


const addTimestamp = (req, res, next) => {
  req.requestTime = Date.now();
  next(); 
};


app.get('/protected', logDetails, checkAuth, addTimestamp, (req, res) => {
  res.send(`Access granted at ${new Date(req.requestTime).toISOString()}`);
});


const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
