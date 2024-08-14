import { Router } from "express";
import { validationMiddleware } from "../../middlewares/validation.middleware.js";
import { createImageSchema } from "./dto/create-product-image.dto.js";
import productImageController from "./product-image.controller.js";
import { upload } from "../../helper/product-image.helper.js";

const router = Router();


router.post("/product-image",[upload.array("images"),validationMiddleware(createImageSchema)], productImageController.createImage);
router.get("/product-image/:id",productImageController.getImage);
router.get("/product-image",productImageController.getImage);

export default router