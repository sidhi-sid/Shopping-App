const Sequelize=require('sequelize')
const db=new Sequelize('shopdb','shopper','shoppass',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        min:0,
        max:5,

    }
})
const user=db.define('users',{
    id: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true

    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    }
})

const product=db.define('products',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    manufacturer:Sequelize.STRING,
    price:{
        type:Sequelize.FLOAT,
        allowNull:false,
        defaultValue:0.0
    }
})

db.sync()
    .then(()=>console.log("DB has been synced"))
    .catch((err)=>console.error("Error creating DB"))

exports=module.exports={
    user,product
}