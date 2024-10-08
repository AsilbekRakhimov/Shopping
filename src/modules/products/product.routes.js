import { Router } from "express";
import productController from "./product.controller.js";
import { validationMiddleware } from "../../middlewares/validation.middleware.js";
import { createProductSchema } from "./dto/create-product.dto.js";
import { upload } from "../../helper/product-image.helper.js";
import { CheckAuthGuard } from "../../guard/check-auth.guard.js";
import { CheckRolesGuard } from "../../guard/check-roles.guard.js";
import { updateProductSchema } from "./dto/update-product.dto.js";

const router = Router();

router.get(
  "/:categoryID",
  CheckAuthGuard(false),
  productController.getAllProducts
);


router.get(
  "/one/:id",
  CheckAuthGuard(false),
  productController.getOneProducts
);


router.post(
  "/",
  [
    CheckAuthGuard(true),
    CheckRolesGuard("admin"),
    upload.array("image"),
    validationMiddleware(createProductSchema),
  ],
  productController.createProduct
);


router.put(
  "/update/:id",
  [
    CheckAuthGuard(true),
    CheckRolesGuard("admin"),
    upload.single("image"),
    validationMiddleware(updateProductSchema),
  ],
  productController.updateOneProduct
);


router.delete(
  "/delete/:id",
  [CheckAuthGuard(true), CheckRolesGuard("admin")],
  productController.deleteOneProduct
);


export default router;
