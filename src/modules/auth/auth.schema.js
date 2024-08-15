import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name:String,
    username:String,
    password:String,
    role:String
},
{
    _id:true,
    collection:"users",
    timestamps:true
})

export const User = mongoose.model("users", userSchema)