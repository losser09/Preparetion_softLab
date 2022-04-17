const mongoose=require('mongoose')

const bookschema=new mongoose.Schema({
    name:String,
    description:String
})


module.exports=mongoose.model('books',bookschema);