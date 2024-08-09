import Joi from "joi";

export const createProductSchema = Joi.object({
    name:Joi.string().min(2).required(),
    description:Joi.string(),
    categoryID:Joi.string().required()
});