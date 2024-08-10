import Joi from "joi";

export const signInUserSchema = Joi.object({
    username: Joi.string().min(6).required(),
    password: Joi.string().min(4).required()
})