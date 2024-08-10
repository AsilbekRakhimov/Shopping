import { BaseException } from "./base.exception.js";

export class Unauthorized extends BaseException{
    constructor(message){
        super()
        this.message = message
        this.status = 401
        this.name = "UnAuthorized error"
    }
}