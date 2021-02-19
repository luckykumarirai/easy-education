require('./config/db')

const express=require("express");
const app=express();


const PORT=5000;

const UserRouter = require('./api/User');

const bodyParser = require('express').json;

app.use(bodyParser())

app.use('/user',UserRouter)


app.listen(PORT,()=>{
    console.log("server is running on port ",PORT)
})


app.get('/',(req,res)=>{
    res.send("Hello World lucky");
});

