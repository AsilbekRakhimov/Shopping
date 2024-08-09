import { product } from "./product.schema.js";

class ProductService {
  #_model;
  constructor() {
    this.#_model = product;
  }
  async getProduct(categoryId) {
    const products = await this.#_model.find({ categoryID: categoryId });
    return products;
  }
  async getOneProduct(productID) {
    const product = await this.#_model.findById(productID);
    return product;
  }
  async createProduct({ name, description, cost, image, categoryID }) {
    const product = await this.#_model.insertMany({
      name,
      description,
      cost,
      image,
      categoryID,
    });
    return product;
  }
  async updateProduct(
    productID,
    { name, description, cost, image, categoryID }
  ) {
    const product = await this.#_model.updateMany(
      { _id: productID },
      {
        $set: {
          name,
          description,
          cost,
          image,
          categoryID,
        },
      }
    );
  }
  async deleteProduct (productID) {
    const deletedProduct = await this.#_model.deleteOne({_id:productID});
    return deletedProduct;
  }
}


export default new ProductService()