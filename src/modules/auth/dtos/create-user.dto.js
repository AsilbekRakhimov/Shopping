import Joi from "joi";

export const signUpUserSchema = Joi.object({
    name:Joi.string().min(4),
    username: Joi.string().min(6).required(),
    password: Joi.string().min(4).required(),
    role:Joi.string()
})