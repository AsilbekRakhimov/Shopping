import { Router } from "express";
import { validationMiddleware } from "../../middlewares/validation.middleware.js";
import { createCategorySchema } from "./dtos/create-category.dto.js";
import categoryController from "./category.controller.js";
import { updateCategorySchema } from "./dtos/update-category.dto.js";

const router = Router();

router.post(
  "/category",
  validationMiddleware(createCategorySchema),
  categoryController.createCategories
);
router.get("/category", categoryController.getAllCategories);
router.get("/category/:id", categoryController.getOneCategory);
router.put("/category/:id", validationMiddleware(updateCategorySchema),categoryController.updateOneCategory);
router.delete("/category/:id",categoryController.deleteOneCategory);

export default router;
