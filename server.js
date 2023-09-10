const express=require('express');
const app=express()

app.get('/',(req,res)=>{
    res.send('hello World')
})
app.listen(3000,()=>{
    console.log("Node Api is Runing at 3000")
})