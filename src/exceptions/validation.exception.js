import { BaseException } from "./base.exception.js";

export class ValidationError extends BaseException{
    constructor(message){
        super()
        this.message = message
        this.name = "Validation Error"
        this.status = 401
        this.isException = true
    }
}