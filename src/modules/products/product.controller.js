import { NotFoundException } from "../../exceptions/not-found.exception.js";
import productService from "./product.service.js";

class ProductController{
    #_service;
    constructor(){
        this.#_service = productService
    }
    getAllProducts = async (req, res) => {
        try {
           const products = await this.#_service.getProduct(req.params.categoryID);
           res.status(200).send({
            data:products,
           })
        } catch (error) {
            throw new NotFoundException(error.message)
        }
    }
}

export default new ProductController()