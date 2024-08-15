import { Router } from "express";
import { validationMiddleware } from "../../middlewares/validation.middleware.js";
import { createImageSchema } from "./dto/create-product-image.dto.js";
import productImageController from "./product-image.controller.js";
import { upload } from "../../helper/product-image.helper.js";
import { CheckAuthGuard } from "../../guard/check-auth.guard.js";
import { CheckRolesGuard } from "../../guard/check-roles.guard.js";

const router = Router();


router.post("/product-image",[upload.array("images"),CheckAuthGuard(true), CheckRolesGuard("admin"),validationMiddleware(createImageSchema)], productImageController.createImage);

router.get("/product-image/:id",productImageController.getImage);

router.get("/product-image",productImageController.getImages);

router.delete("/product-image/:id", [CheckAuthGuard(true), CheckRolesGuard("admin")],productImageController.deleteImage);

export default router