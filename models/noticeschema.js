const mongoose=require('mongoose')
const noticeschema=new mongoose.Schema({
    name:String,
    age:Number
})

module.exports=mongoose.model("record",noticeschema)