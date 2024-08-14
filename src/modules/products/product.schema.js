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
});

export const product = mongoose.model("products", productSchema);
