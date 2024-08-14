import  mongoose, { Schema } from "mongoose";

const imageSchema = new Schema({
    image:{
        type:String
    },
    productId: {
        type:String,
    }
},{
    _id:true,
    timestamps:true
})

export const productImages = mongoose.model("images", imageSchema);