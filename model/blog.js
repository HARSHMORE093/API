const mongoose = require("mongoose");
const { Schema } = mongoose;
const blogSc = new Schema({
  title: String,
  author: String,
  body: String,
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});
exports.blogSc=mongoose.model("blog",blogSc);

// 2nd schema for tutorial
// const pSchema=new Schema({
//   title: {type: String, required: true} ,
//   description: String,
//   price: {type: Number, min:[0,'wrong price'],required: true},
//   discountPercentage: {type: Number, min:[0,'wrong min discount'], max:[50,'wrong max discount']},
//   rating: {type: Number, min:[0,'wrong min rating'], max:[5,'wrong max rating']},
//   brand: {type: String,required: true},
//   category: {type: String, required: true},
//   thumbnail: {type: String, required: true},
//   images: [ String ]

// });

// exports.Product=mongoose.model('product',pSchema)//compass collection ka naam products hona chiye