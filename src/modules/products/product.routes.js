import { Router } from "express";
import productController from "./product.controller.js";
import { validationMiddleware } from "../../middlewares/validation.middleware.js";
import { createProductSchema } from "./dto/create-product.dto.js";
import { upload } from "../../helper/product-image.helper.js";

const router = Router()

router.get("/products/:categoryID", productController.getAllProducts);
router.post("/product", [upload.single("image"),validationMiddleware(createProductSchema)],productController.createProduct)

export default router