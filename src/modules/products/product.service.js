import path from "path";
import { product } from "./product.schema.js";
import fs from 'fs';
import { category } from "../categories/category.schema.js";

class ProductService {
  #_model;
  #_categoryModel;
  constructor() {
    this.#_model = product;
    this.#_categoryModel = category
  }
  async getProduct(categoryId) {
    const products = await this.#_model.find().populate({
      path: "category",
      select: "categoryName _id"
    }).select(["-__v"])

    return products;
  };
  async getOneProduct(productID) {
    const product = await this.#_model.findById(productID);
    return product;
  }
  async createOneProduct({ name, description, cost, image, categoryID }) {
    const product = await this.#_model.insertMany({
      name,
      description,
      cost,
      category: categoryID,
    })

    await this.#_categoryModel.updateOne({_id: categoryID}, {
      $push: {
        products: product[0]._id
      }
    })
    return product;
  }


  async updateProduct(
    productID,
    { name, description, cost, image, categoryID }
  ) {
    // const product = await this.#_model.findById(productID)
    // fs.unlink(path.join(process.cwd(), 'uploads', product.image), (err) => {
    //   if (err) {
    //     throw err
    //   }
    // })
    const updatedProduct = await this.#_model.updateMany(
      { _id: productID },
      {
        $set: {
          name,
          description,
          cost,
          categoryID,
        },
      }
    );
    return updatedProduct
  }
  async deleteProduct (productID) {
    const product = await this.#_model.findById(productID)
    const productImageURL = product.image
    fs.unlink(path.join(process.cwd(), 'uploads', productImageURL), (err) => {
      if (err) {
        throw err
      }
    })
    const deletedProduct = await this.#_model.deleteOne({_id:productID});
    return deletedProduct;
  }
}


export default new ProductService()