import mongoose, { Schema, SchemaTypes } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name berib yuborish shart"],
    minLength: [5, "Minimall 5 length bo'lsin ukom"]
  },
  decsription: {
    type: String,
  },
  cost: {
    type: String,
  },
  image: String,
  category: {
    type: SchemaTypes.ObjectId,
    ref: "categories",
  },
});

export const product = mongoose.model("products", productSchema);
