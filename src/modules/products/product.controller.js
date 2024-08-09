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
    getOneProducts = async (req, res) => {
        try {
            const product = await this.#_service.getOneProduct(req.params.id);
            if (!product) {
                res.status(404).send({
                    message:"Product is not found"
                })
                return
            }
        } catch (error) {
            throw new NotFoundException(error.message)
        }
    }
    createProduct = async (req, res) => {
        try {
            const product = await this.#_service.createProduct({...req.body, image:req.file.filename})
            res.status(201).send({
                data:product,
                message:"Product is created"
            })
        } catch (error) {
            throw new NotFoundException(error.message)
        }
    }
}

export default new ProductController()