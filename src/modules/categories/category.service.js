import { category } from "./category.schema.js";


class CategoryService{
    #_model;
    constructor(){
        this.#_model = category
    }

    async createCategory ({categoryName}){
        const data = await this.#_model.create({categoryName});
        return data
    }
}

export default new CategoryService()