import { Router } from "express";
import authRouter from "../modules/auth/auth.routes.js";
import categoryRouter from "../modules/categories/category.routes.js";
import productRouter from "../modules/products/product.routes.js";
import productImageRouter from "../modules/product-images/product-image.routes.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/category", categoryRouter);
router.use("/product", productRouter);
router.use("/product-image", productImageRouter);

export default router;
