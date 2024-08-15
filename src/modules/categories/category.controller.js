import { isValidObjectId } from "mongoose";
import { NotFoundException } from "../../exceptions/not-found.exception.js";
import categoryService from "./category.service.js";

class CategoryController {
  #_service;

  constructor() {
    this.#_service = categoryService;
  }

  // create category
  createCategories = async (req, res) => {
    try {
      const data = await this.#_service.createCategory(req.body);
      if (data) {
        res.status(201).send({
          data: data,
          message: "Succesfully created",
        });
      } else {
        res.status(403).send({
          message: "Errorrrr occured while creating category",
        });
      }
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  };
  // create category


  //  get all categories
  getAllCategories = async (req, res) => {
    try {
      const data = await this.#_service.getCategory();
      if (!data) {
        res.status(404).send({
          message: "Not found",
        });
        return;
      }
      res.status(200).send({
        data: data,
        message: "All categories"
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  };
  //  get all categories


  //  get one category
  getOneCategory = async (req, res) => {
    try {
      const category = await this.#_service.getOneCategory(req.params.id);
      if (!category) {
        res.status(404).send({
          message: "Category not found",
        });
        return;
      }
      res.status(200).send({
        data: category,
        message: "Category is found",
      });
    } catch (error) {
      res.status(500).send({
        message:"Category is not found!"
      })
    }
  };
  //  get one category


  // update category
  updateOneCategory = async (req, res) => {
    try {
      const category = await this.#_service.updateCategory(
        req.params.id,
        req.body
      );
      if (!category) {
        res.status(404).send({
          message: "Not found",
        });
        return;
      }
      res.status(200).send({
        data: category,
        message: "Category is updated",
      });
    } catch (error) {
      res.status(404).send({
        message:"Not found category for update"
      })
    }
  };
  // update category

  
  //  delete category
  deleteOneCategory = async (req, res) => {
    try {
      const deletedCategory = await this.#_service.deleteCategory(req.params.id);
      if(deletedCategory.acknowledged){
        res.status(200).send({
          message:"Category is deleted"
        })
        return;
      }
      res.status(404).send({
        message:"Category is not found"
      })
    } catch (error) {
      throw new NotFoundException(error.message)
    }
  }
  //  delete category

}

export default new CategoryController();
