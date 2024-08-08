import { NotFoundException } from "../../exceptions/not-found.exception.js";
import categoryService from "./category.service.js";

class CategoryController {
  #_service;

  constructor() {
    this.#_service = categoryService;
  }

  createCategories = async (req, res) => {
    const data = await this.#_service.createCategory(req.body);
    if (data) {
      res.status(201).send({
        data:data,
        message: "Succesfully created"
      });
    } else {
      res.status(403).send({
        message: "Errorrrr occured while creating category",
      });
    }
  };
  getAllCategories = async (req, res) => {
    try {
      const data = await this.#_service.getCategory()
      if(!data){
        res.status(404).send({
          message:"Not found"
        })
        return;
      }
      res.status(200).send({
        data:data,
        message:"All categories"
      })

    } catch (error) {
      throw new NotFoundException(error.message)
    }
  }
}

export default new CategoryController();
