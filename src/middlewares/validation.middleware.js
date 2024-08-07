import { ValidationError } from "../exceptions/validation.exception.js";

export const validationMiddleware = (schema) =>{
    return (req, res, next) =>{
        const data = req.body;
        const {value, error} = schema.validate(data);
        if (error) {
            throw new ValidationError(error.message)
        }
        req.body = value;
        next()
    }
}