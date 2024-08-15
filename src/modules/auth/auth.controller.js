import authService from "./auth.service.js";

class AuthController{
    #_service;
    constructor(){
        this.#_service = authService
    }

    //  sign up part
    signUpUser = async (req, res) =>{
        const data = await this.#_service.signUp(req.body);
        res.status(201).send({
            data:data,
            message:"Successfully created!"
        })
    }
    //  sign up part

    
    //  sign in part
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
    //  sign in part


    //  sign refresh token part
    signRefreshToken = async (req,res) => {
        const data = await this.#_service.signOneRefreshToken(req.body);
        res.status(200).send({
            data:data,
        });
    }
    //  sign refresh token part

}

export default new AuthController()