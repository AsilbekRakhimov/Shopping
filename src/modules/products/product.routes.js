import { Router } from "express";
import productController from "./product.controller.js";

const router = Router()

router.get("/products/:categoryID", productController.getAllProducts);

export default router