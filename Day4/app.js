const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const PORT =  3000;
const postRoutes=require("./routes/postRoutes")

app.use(express.json());
app.use('/posts',postRoutes)



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});