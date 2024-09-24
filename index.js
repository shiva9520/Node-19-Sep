const express=require('express')
const connectToMongoDB = require('./connection')
const path=require("path")
const studentRoute = require('./routes/student')
const app=express()
const PORT=3000 
app.use('/',studentRoute)
connectToMongoDB()
app.set('view engine','ejs')
app.set('views',path.resolve('./views'))

app.listen(PORT,(err)=>{
    if(err){
        console.log(err);        
    }else{
        console.log(`Server is running on ${3000}`);         
    }
})