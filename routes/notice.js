const express=require('express')
const router=express.Router()
const notice=require('../models/noticeschema')



router.post('/',async(req,res)=>{
    try{
       const data= await notice.create(req.body)
       res.status(200).send(data);
    }catch(e){
        res.send(e)
    }
})
router.get('/',async(req,res)=>{
    try{
       const notices=await notice.find()
       res.send(notices)
    }catch(e){
        console.log(e)
    }
})
router.delete('/',async(req,res)=>{
    try{
       const data= await notice.remove()
       res.status(200).send(data);
    }catch(e){
        res.send(e)
    }
})
router.get('/:id',async(req,res)=>{
    try{
       const notic=await notice.find({_id:req.params.id})
       res.send(notic)
    }catch(e){
        console.log(e)
    }
})
router.put('/:id',async(req,res)=>{
    try{
       const data= await notice.updateOne({_id:req.params.id},req.body)
       res.status(200).send(data);
    }catch(e){
        res.send(e)
    }
})
router.delete('/:id',async(req,res)=>{
    try{
       const notices=await notice.deleteOne({_id:req.params.id})
       res.send(notices)
    }catch(e){
        console.log(e)
    }
})



module.exports=router
