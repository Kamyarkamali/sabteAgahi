import { NextResponse } from "next/server";

import { hashPassword } from "@/utils/auth";

import connectDB from "@/utils/connectionDB";
import User from "@/models/User";

export async function POST(req){
    try{
        await connectDB()

        const {email,password}=await req.json()

        if(!email || !password){
            return NextResponse.json({erorr:"اطلاعات معتبر وارد کنید"},{status:422})
        }

        const existingUser=await User.findOne({email:email})

        if(existingUser){
            return NextResponse.json({erorr:"حساب کاربری وجود دارد"},{status:422})
        }

        const hashedPassword=await hashPassword(password)

        const newUser=await User.create({email:email,password:hashedPassword})

        console.log(newUser)

        return NextResponse.json({message:"حساب کاربری ایجاد شد"},{status:201})

    }catch(erorr){
        console.log(erorr)
        return NextResponse.json({erorr:"مشکلی در سرور رخ داده"},{status:500})
    }
}