import authService from "./auth.service.js";

class AuthController{
    #_service;
    constructor(){
        this.#_service = authService
    }
    getAllusers = async(req, res) =>{
        const data = await this.#_service.getUsers();
        res.status(201).send({
            data:data,
            message:"Succesfully"
        })
    }
    signUpUser = async (req, res) =>{
        const data = await this.#_service.signUp(req.body);
        res.status(201).send({
            data:data,
            message:"Successfully created!"
        })
    }
    signInUser = async (req, res) => {
        const data = await this.#_service.signIn(req.body)
        if (data.data.length > 0) {
            res.status(201).send({
                data:data,
                message:"User successfully signed in"
            })
        }
        else{
            res.status(404).send({
                message:"User is not found"
            })
        }
    }
}

export default new AuthController()