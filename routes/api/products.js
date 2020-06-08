const route=require('express').Router()
const Product=require('../../db').product
route.get('/',(req,res)=>{
    //get all products
    Product.findAll()
    .then((products)=>{
        res.status(200).send(products)
    })
    .catch((err)=>{
        res.status(500).send({
            error:"Could not retrieve products"
        })
    })
})
route.post('/',(req,res)=>{
    //add a new product
    Product.create({
        name:req.body.name,
        manufacturer:req.body.manufacturer,
        price:parseFloat(req.body.price)

    })
})
exports=module.exports=route