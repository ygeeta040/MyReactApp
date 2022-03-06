const mongoose=require('../connection');

const mySchema = new mongoose.Schema({
    name: String,

    price:Number,                                
   
    reviews: Number,
    rating: Number,
    thumnail: String,
    createdAt: {type: Date, default: new Date()},
});

const myModel = mongoose.model("products", mySchema);
module.exports=myModel;