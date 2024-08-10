import { Router } from "express";
import authController from "./auth.controller.js";
import { validationMiddleware } from "../../middlewares/validation.middleware.js";
import {signInUserSchema} from "./dtos/signin-user.dto.js";
import { signUpUserSchema } from "./dtos/create-user.dto.js";

const router = Router();

router.post("/signup",validationMiddleware(signUpUserSchema),authController.signUpUser);
router.post("/signin",validationMiddleware(signInUserSchema),authController.signInUser);

export default router