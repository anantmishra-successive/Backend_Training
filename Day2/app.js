


const express = require("express")
const data = require('./mockdata')
const app=express();


app.get("/",(req,res)=>{
    res.status(200).send(data)
})


app.listen(4000,()=>{
    console.log("listening to port 4000")
})
