import { Router } from "express";
import { validationMiddleware } from "../../middlewares/validation.middleware.js";
import { createCategorySchema } from "./dtos/create-category.dto.js";
import categoryController from "./category.controller.js";
import { updateCategorySchema } from "./dtos/update-category.dto.js";
import { CheckAuthGuard } from "../../guard/check-auth.guard.js";
import { CheckRolesGuard } from "../../guard/check-roles.guard.js";

const router = Router();

router.post(
  "/",
  [
    CheckAuthGuard(true),
    CheckRolesGuard("admin"),
    validationMiddleware(createCategorySchema),
  ],
  categoryController.createCategories
);


router.get(
  "/",
  CheckAuthGuard(false),
  categoryController.getAllCategories
);


router.get(
  "/:id",
  CheckAuthGuard(false),
  categoryController.getOneCategory
);


router.put(
  "/:id",
  [
    CheckAuthGuard(true),
    CheckRolesGuard("admin"),
    validationMiddleware(updateCategorySchema),
  ],
  validationMiddleware(updateCategorySchema),
  categoryController.updateOneCategory
);


router.delete(
  "/:id",
  [CheckAuthGuard(true), CheckRolesGuard("admin")],
  categoryController.deleteOneCategory
);

export default router;
