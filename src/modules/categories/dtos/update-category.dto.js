import Joi from "joi";

export const updateCategorySchema = Joi.object({
    oldCategoryName: Joi.string().min(3).required,
    newCategoryName: Joi.string().min(3).required
});