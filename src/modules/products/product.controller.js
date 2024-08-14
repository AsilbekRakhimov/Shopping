import { NotFoundException } from "../../exceptions/not-found.exception.js";
import productService from "./product.service.js";

class ProductController {
  #_service;
  constructor() {
    this.#_service = productService;
  }
  getAllProducts = async (req, res) => {
    try {
      const products = await this.#_service.getProduct(req.params.categoryID);
      res.status(200).send({
        data: products,
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  };
  getOneProducts = async (req, res) => {
    try {
      const product = await this.#_service.getOneProduct(req.params.id);
      if (!product) {
        res.status(404).send({
          message: "Product is not found",
        });
        return;
      }
      res.status(200).send({
        data: product,
      })
    } catch (error) {
      res.status(404).send({
        message:"Data is not found"
      })
      // throw new NotFoundException(error.message);
    }
  };
  createProduct = async (req, res) => {
    try {
      const {cost, description, name, categoryID} = req.body
      const created = await this.#_service.createOneProduct({
        cost, description, name, categoryID
      })
      res.status(201).send({
        data: created,
        message: "Product is created",
      })

    } catch (error) {
      throw new NotFoundException(error.message);
    }
  };
  updateOneProduct = async (req, res) => {
    try {
      const product = await this.#_service.updateProduct(req.params.id, {
        ...req.body,
        image: req.file.filename,
      });
      res.status(200).send({
        message: "Product is updated",
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  };
  deleteOneProduct = async (req, res) => {
    try {
      const product = await this.#_service.deleteProduct(req.params.id);
      if (product.acknowledged) {
        res.status(200).send({
          message: "Product is deleted",
        });
        return;
      }
      res.status(404).send({
        message: "Product is not found",
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  };
}

export default new ProductController();
