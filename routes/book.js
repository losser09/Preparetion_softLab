const express=require('express')

const router=express.Router()
const book=require('../models/bookschema')


router.route('/')
.get(async(req,res)=>{
    try{
        const data=await book.find({})
        res.send(data);
    }catch(err){
        res.send(err);
    }
})

.post(async(req,res)=>{
    try{
        const data=await book.create(req.body)
        res.send(data);
    }catch(err){
        res.send(err);
    }
})

.delete(async(req,res)=>{
    try{
        const data=await book.remove()
        res.send(data);
    }catch(err){
        res.send(err);
    }
})

router.route('/:id')
.get(async(req,res)=>{
    try{
        const data=await book.find({_id:req.params.id})
        res.send(data);
    }catch(err){
        res.send(err);
    }
})

.put(async(req,res)=>{
    try{
        const data=await book.updateOne({_id:req.params.id},req.body)
        res.send(data);
    }catch(err){
        res.send(err);
    }
})

.delete(async(req,res)=>{
    try{
        const data=await book.deleteOne({_id:req.params.id})
        res.send(data);
    }catch(err){
        res.send(err);
    }
})



module.exports=router;