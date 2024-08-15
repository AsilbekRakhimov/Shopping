import { NotFoundException } from "../../exceptions/not-found.exception.js";
import productService from "./product.service.js";

class ProductController {
  #_service;
  constructor() {
    this.#_service = productService;
  }

  // get all products
  getAllProducts = async (req, res) => {
    try {
      const products = await this.#_service.getProduct(req.params.categoryID);
      res.status(200).send({
        data: products,
      });
    } catch (error) {
      res.status(404).send({
        message: "Products are not found",
      });
    }
  };
  // get all products


  // get one product
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
      });
    } catch (error) {
      res.status(404).send({
        message: "Data is not found",
      });
    }
  };
  // get one product


  // create one product
  createProduct = async (req, res) => {
    try {
      const { cost, description, name, categoryID } = req.body;
      const created = await this.#_service.createOneProduct({
        cost,
        description,
        name,
        categoryID,
      });
      res.status(201).send({
        data: created,
        message: "Product is created",
      });
    } catch (error) {
      res.status(400).send({
        message: "There is an error with creating the product",
      });
    }
  };
  // create one product


  // update one product
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
      res.status(400).send({
        message: "There is an error with updating the product",
      });
    }
  };
  // update one product

  
  // delete one product
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
      res.status(400).send({
        message: "There is an error with deleting the product",
      });
    }
  };
  // delete one product
}

export default new ProductController();
