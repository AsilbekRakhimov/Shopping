import mongoose,{ Schema } from "mongoose";

const categorySchema = new Schema({
    categoryName: String
}, {
    _id:true,
    timestamps:true,
    collection:"categories"
})

export const category = mongoose.model('categories', categorySchema)