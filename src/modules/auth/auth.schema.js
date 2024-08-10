import mongoose, { Schema }  from "mongoose";


const userSchema = new Schema({
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