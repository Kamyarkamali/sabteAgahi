import Profile from "@/models/Profile"
import User from "@/models/User"
import connectDB from "@/utils/connectionDB"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export async function DELETE(req,context){
    try{
        await connectDB()

        const id=context.params.profileId

        const session=await getServerSession(req)

        if(!session) return NextResponse.json({error:"وارد اکانت کاربری شوید"},{status:401})

        const user=await User.findOne({email:session.user.email})

        if(!user) return NextResponse.json({error:'حساب کاربری وحود ندارد'},{status:422})

        const profile=await Profile.findOne({_id:id})

        if(!user._id.equals(profile.userId)){
            return NextResponse.json({error:"دسترسی شما به آگهی محدود شده است "},{status:401})
        }

        await Profile.deleteOne({_id:id})
        return NextResponse.json({message:"آگهی حذف شده است"},{status:201})

    }catch(error){
        console.log(error)
        return NextResponse.json({error:"مشکلی در سرور پیش آمده"},{status:500})
    }
}