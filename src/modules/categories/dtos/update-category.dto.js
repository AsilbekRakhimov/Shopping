import Joi from "joi";

export const updateCategorySchema = Joi.object({
    categoryName:Joi.string().min(3).required()
});