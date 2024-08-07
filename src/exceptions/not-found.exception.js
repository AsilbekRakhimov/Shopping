import { BaseException } from "./base.exception.js";

export class NotFoundException extends BaseException{
    constructor(message, name){
        super()
        this.message = message
        this.name = "NotFoundException"
        this.status = 404
        this.isException = true
    }
}