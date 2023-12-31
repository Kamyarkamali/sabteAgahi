import { Schema,model,models } from "mongoose";

const userScema=new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:()=> Date.now(),
        immutabale:true
    },
    published:{
        type:Boolean,
        default:false
    }
})

const User=models.User || model("User",userScema)

export default User