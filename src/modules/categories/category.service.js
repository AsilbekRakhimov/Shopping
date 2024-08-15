import { NotFoundException } from "../../exceptions/not-found.exception.js";
import { category } from "./category.schema.js";

class CategoryService {
  #_model;
  constructor() {
    this.#_model = category;
  }

  async createCategory({ categoryName }) {
    try {
      const data = await this.#_model.create({ categoryName });
      return data;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }


  async getCategory() {
    try {
      const data = await this.#_model.find().populate("products");
      return data;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }


  async getOneCategory(categoryID) {
    try {
      const category = await this.#_model.findById(categoryID);
      return category;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }


  async updateCategory(categoryID, {categoryName}){
    try {
        const filter = {_id:categoryID}
        const updatedCategory = await this.#_model.updateMany(filter, {$set:{
            categoryName:categoryName
        }})
        return updatedCategory;
    } catch (error) {
        throw new NotFoundException(error.message)
    }
  }


  async deleteCategory (categoryID){
    try {
        const deletedCategory = await this.#_model.deleteOne({_id:categoryID});
        return deletedCategory;
    } catch (error) {
        throw new NotFoundException(error.message)
    }
  }

  
}

export default new CategoryService();
