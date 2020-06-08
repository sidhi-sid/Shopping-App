const route=require('express').Router()
const Product=require('../../db').product
route.get('/',(req,res)=>{
    //get all products
})
route.post('/',(req,res)=>{
    //add a new product
})
exports=module.exports=route