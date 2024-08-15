import mongoose, { Schema, SchemaTypes } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name berib yuborish shart"],
  },
  description: {
    type: String,
  },
  cost: {
    type: String,
  },
  category: {
    type: SchemaTypes.ObjectId,
    ref: "categories",
  },
  images:[
    {
    type: SchemaTypes.ObjectId,
    ref:"images"
  }
]
});

export const product = mongoose.model("products", productSchema);
