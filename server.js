const express = require('express');
require('dotenv').config()
const server=express()
const mongoose = require('mongoose');
const path=require("./routes/blog")

server.use(express.json())
server.use('/blog',path.router)



main().catch(err => console.log(err));

async function main() {
  await mongoose
  .connect(process.env.Db_link)
  .then(()=>{
    console.log("connected to mongoose");
    server.listen(3000,()=>{
        console.log("Node Api is Runing at 3000")
    })
  }).catch(()=>{
    console.log("Auth Failed")
  })
  
}