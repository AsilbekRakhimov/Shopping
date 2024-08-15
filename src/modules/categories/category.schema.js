import mongoose, { Schema, SchemaTypes } from "mongoose";

const categorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: true,
      unique:true
    },
    products: [
      {
        type: SchemaTypes.ObjectId,
        ref: "products",
      },
    ],
  },
  {
    _id: true,
    timestamps: true,
    collection: "categories",
  }
);

export const category = mongoose.model("categories", categorySchema);
