const express=require("express")
const controller=require('../controller/blog')
const router=express.Router()

router.post('/',controller.create)
.get('/',controller.getAll)
.get('/:id',controller.getId)
.delete('/:id',controller.delete)
.put('/:id',controller.replace)
.patch('/:id',controller.update);

exports.router=router;