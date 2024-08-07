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
}

export default new CategoryController();
