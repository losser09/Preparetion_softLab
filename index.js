const express=require('express')
const app=express()
const mongoose=require('mongoose')
const noticeschema = require('./models/noticeschema')

const url='mongodb://127.0.0.1/practice'
const connect=mongoose.connect(url)
connect.then(()=>{
    console.log("connected to database ..")
},(err)=>{console.log(err)})
const notice=require('./routes/notice')
const books=require('./routes/book')
app.use(express.json())


app.use('/notice',notice);
app.use('/book',books);
app.listen(3000,()=>{
    console.log("server is running ..")
})
