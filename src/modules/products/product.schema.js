import mongoose,{Schema} from "mongoose";

const productSchema = new Schema({
    name:String,
    decsription:String,
    cost:String,
    image:String,
    categoryID:String
});

export const product = mongoose.model("products", productSchema);