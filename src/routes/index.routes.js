import { Router } from "express";
import authRouter from "../modules/auth/auth.routes.js";
import categoryRouter from "../modules/categories/category.routes.js";
import productRouter from "../modules/products/product.routes.js";
import productImageRouter from "../modules/product-images/product-image.routes.js";

const router = Router();

router.use("/api/v1", authRouter);
router.use("/api/v1", categoryRouter);
router.use("/api/v1", productRouter);
router.use("/api/v1", productImageRouter);

export default router;
