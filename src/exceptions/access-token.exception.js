import { BaseException } from "./base.exception.js";

export class AccessTokenError extends BaseException{
    constructor(message, name){
        super()
        this.message = message
        this.status = 403
        this.name = name
    }
}