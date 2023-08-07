import { Schema,model,models } from "mongoose";

const userScema=new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required
    },
    createdAt:Date,
    default:()=> Date.now(),
    immutabale:true
})

const User=models.User || model("Users",userScema)

export default User