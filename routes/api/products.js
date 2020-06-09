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
    //validate the product
    if(isNaN(req.body.price)){  //isNaN is a function to check if no is not a number
        return res.status(403).send({
            error:"Price is not valid "
        })
    }
    //add a new product
    Product.create({
        name:req.body.name,
        manufacturer:req.body.manufacturer,
        price:parseFloat(req.body.price)

    }).then((product)=>{
        res.status(201).send(product)
    }).catch((err)=>{
        res.status(501).send({
            error:"Error adding product"
        })
    })
})
exports=module.exports=route