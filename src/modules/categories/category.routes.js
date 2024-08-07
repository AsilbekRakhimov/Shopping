import { Router } from "express";
import { validationMiddleware } from "../../middlewares/validation.middleware.js";
import { createCategorySchema } from "./dtos/create-category.dto.js";
import categoryController from "./category.controller.js";

const router = Router()

router.post("/category", validationMiddleware(createCategorySchema), categoryController.createCategories)

export default router