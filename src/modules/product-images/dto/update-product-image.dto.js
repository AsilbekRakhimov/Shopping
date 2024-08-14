import Joi from "joi";

export const updateImageSchema = Joi.object({
    productId:Joi.string() 
})