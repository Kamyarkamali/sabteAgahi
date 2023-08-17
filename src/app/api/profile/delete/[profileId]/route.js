import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectionDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(req,context){

    try{
       await connectDB()

       const id=context.params.profileId

       const session=await getServerSession(req)

       if(!session){
        return NextResponse.json({error:"حساب کاربری وجو ندارد"},{status:401})
       }

       const user=await User.findOne({email:session.user.email})


        if(!user){
            return NextResponse.json({error:"حساب کاربری وجود ندارد"},{status:401})
        }

        const profile=await Profile.findOne({_id:_id})

        if(!user._id.equals(profile.userId)){
            return NextResponse.json({error:"دسترسی شما به آگهی محدود شده"},{status:403})
        }

    }catch(error){
        console.log(error)
        NextResponse.json({error:"مشکل در اتصال سرور"},{status:500})
    }

}