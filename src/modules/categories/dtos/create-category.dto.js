import Joi from "joi";

export const createCategorySchema = Joi.object({
    categoryName:Joi.string().min(3)
})