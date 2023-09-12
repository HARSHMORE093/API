const model=require("../model/blog");
const schema=model.blogSc

exports.create=async(req,res)=>{
    try {
        const product = await schema.create(req.body)
        res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
};
exports.delete=async(req,res)=>{
    try {
        const {id}=req.params
        const item=await schema.findByIdAndDelete(id)
        if(!item){
            return res.status(404).json({message: `cannot find any item with ID ${id}`})
        }
        res.status(200).json(item);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}
//patch
exports.update=async (req,res)=>{
    try {
        const {id}=req.params
        const item=await schema.findByIdAndUpdate(id, req.body)
        if(!item){
            return res.status(404).json({message: `cannot find any item with ID ${id}`})
        }
        res.status(200).json(item)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
}
//put
exports.replace=async (req,res)=>{
    try {
        const {$id}=req.params
        const item=await schema.findOneAndReplace($id, req.body,{new:true})
        if(!item){
            return res.status(404).json({message: `cannot find any item with ID ${id}`})
        }
        res.status(200).json(item)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message:error.message})
    }
}

exports.getAll=async(req,res)=>{
    const item=await schema.find({})
    res.status(200).json(item);
}
exports.getId=async(req,res)=>{
    const {id}=req.params
    const item=await schema.findById(id)
    res.status(200).json(item);
}