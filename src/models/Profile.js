import { Schema,model,models } from "mongoose";

const ProfileScema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    constructionDate:{
        type:Date,
        required:true
    },
    category:{
        type:String,
        enum:["aparteman","villa","stroe","office"],
        required:true
    },
    amenities:{
        type:[String],
        default:[],
    },
    rules:{
        type:[String],
        default:[],
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    role:{
        type:String,
        default:"USER"
    }
},{timestamps:true})

const Profile=models.Profile || model("Profile",ProfileScema)

export default Profile;