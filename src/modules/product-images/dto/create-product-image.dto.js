import Joi from "joi";

export const createImageSchema = Joi.object({
    productId:Joi.string().required() 
})