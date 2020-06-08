const express=require('express')
const app=express()
const path=require('path')
app.use('/',express.static(path.join(__dirname,'public')))
app.use('/api',require('./routes/api').route) //automatically uses index.js file if not assigned explicitly
app.listen(2678,()=>console.log('Server started'))
