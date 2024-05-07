const express = require("express");
require("./config");
const country = require("./country");

const app = express();
app.use(express.json());
app.post('/', async (req,res) => {
    
    let result = await country.create(req.body);

    res.status(200).send(result);
})

app.get('/', async (req, res) => {
    let result = await country.find()
    res.status(200).send(result);
})

app.listen(8000,()=>{
    console.log('Server running on PORT no 5000')
})