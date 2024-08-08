import { NotFoundException } from "../../exceptions/not-found.exception.js";
import { category } from "./category.schema.js";


class CategoryService{
    #_model;
    constructor(){
        this.#_model = category
    }

    async createCategory ({categoryName}){
        try {
            const data = await this.#_model.create({categoryName});
            return data
        } catch (error) {
            throw new NotFoundException(error.message)
        }
    }
    async getCategory (){
        try{
            const data = await this.#_model.find()
            return data
        }
        catch(error){
            throw new NotFoundException(error.message)
        }
    }

}

export default new CategoryService()