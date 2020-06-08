const User=require('../../db').user
const route=require('express').Router()
route.get('/',(req,res)=>{
    //send an array of all users
    //from our db here
    User.findAll()
    .then((users)=>{
        res.status(200).send(users)
    })
    .catch((err)=>{
        res.status(500).send({
            error:"Could not retrive users"
        })
    })

})
route.post('/',(req,res)=>{
    //expect the req to have name in it
    //new user will be created
    User.create({
        name:req.body.name
    }).then((user)=>{
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(501).send({
            error:"Could not add new user"
        })
    })
})

exports=module.exports=route