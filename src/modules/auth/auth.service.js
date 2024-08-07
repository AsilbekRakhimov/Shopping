import { User } from "./auth.schema.js";

class AuthService{
    #_model;
    constructor(){
        this.#_model = User
    }

    async getUsers(){
        const data = await this.#_model.find()
        return data
    }
    async signUp({name,username,password}){
        const data = await this.#_model.create({name,username,password});
        return data
    }
    async signIn({username, password}){
        const data = await this.#_model.find({username, password})
        return data
    }
} 

export default new AuthService()