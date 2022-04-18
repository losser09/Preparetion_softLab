const express=require('express');
const app=express()
const mongoose=require('mongoose')

const connect=mongoose.connect("mongodb://127.0.0.1/lastly")
connect.then((db)=>{
    console.log("connection successfull ...")
},(err)=>{console.log(err)})
app.use(express.json())
const dishes=require('./models/dishesSchema')


app.get('/dishes',async(req,res)=>{
    try{
       const dish= await dishes.find({})
       res.send(dish)
    } catch(err){
        res.send(err);
    }
})
app.post('/dishes',async(req,res)=>{
    try{
        const added=await dishes.create(req.body)
        res.send(added);
    }catch(err){
        res.send(err)
    }
})
app.get('/dishes/:id',async(req,res)=>{
    try{
       const dish= await dishes.find({_id:req.params.id})
       res.send(dish)
    } catch(err){
        res.send(err);
    }
})
app.put('/dishes/:id',async(req,res)=>{
    try{
       const dish= await dishes.updateOne({_id:req.params.id},req.body)
       res.send(dish)
    } catch(err){
        res.send(err);
    }
})
app.delete('/dishes/:id',async(req,res)=>{
    try{
       const dish= await dishes.deleteOne({_id:req.params.id})
       res.send(dish)
    } catch(err){
        res.send(err);
    }
})


app.listen(3000,()=>{
    console.log("server is running")
})


//get->try->const->.sort({"jetake sort korbo":1})