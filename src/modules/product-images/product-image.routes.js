import { Router } from "express";
import { validationMiddleware } from "../../middlewares/validation.middleware.js";
import { createImageSchema } from "./dto/create-product-image.dto.js";
import productImageController from "./product-image.controller.js";
import { upload } from "../../helper/product-image.helper.js";
import { CheckAuthGuard } from "../../guard/check-auth.guard.js";
import { CheckRolesGuard } from "../../guard/check-roles.guard.js";

const router = Router();

router.post(
  "/",
  [
    upload.array("images"),
    CheckAuthGuard(true),
    CheckRolesGuard("admin"),
    validationMiddleware(createImageSchema),
  ],
  productImageController.createImage
);

router.get("/:id", productImageController.getImage);

router.get("/", productImageController.getImages);

router.delete(
  "/:id",
  [CheckAuthGuard(true), CheckRolesGuard("admin")],
  productImageController.deleteImage
);

export default router;
