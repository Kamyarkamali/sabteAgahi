import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectionDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        await connectDB()

        const body=await req.json()

        const {title,description,location,phone,price,realState,constructionDate,category,rules,amenities}=body

        const session=await getServerSession(req)

        if(!session){
            return NextResponse.json({error:"حساب کاربری وجود ندارد"},{status:401})
        }

        const user=await User.findOne({email:session.user.email})
        console.log(user)

        if(!user){
            return NextResponse.json({error:"حساب کاربری وجود ندارد"},{status:401})
        }

        if(!title || !description || !location || !phone || !price || !realState || !constructionDate || !category || !rules || !amenities){
            return NextResponse.json({error:"فیلد ها را پر کنید"},{status:402})
        }

    const newProfile=await Profile.create({
        title,
        description,
        location,
        phone,
        constructionDate,
        price:+price,
        rules,
        amenities,
        category,
        userId:new Types.ObjectId(user._id)
    })
    console.log(newProfile)
    return NextResponse.json({messegae:"آگهی جدید ساخته شد"},{status:201})

    }catch(err){
        console.log(err)
        return NextResponse.json({error:"مشکلی در سرور رخ داده"},{status:500})
    }
}


// export async function PATCH(req){
//     try{
//         await connectDB()
        
//         const {_id,title,description,location,phone,price,realState,constructionDate,category,rules,amenities}=body

//         const session=await getServerSession(req)


//         if(!session){
//             return NextResponse.json({error:"حساب کاربری وجود ندارد"},{status:401})
//         }

//         const user=await User.findOne({email:session.user.email})


//         if(!user){
//             return NextResponse.json({error:"حساب کاربری وجود ندارد"},{status:401})
//         }

//         if(!_id||!title || !description || !location || !phone || !price || !realState || !constructionDate || !category || !rules || !amenities){
//             return NextResponse.json({error:"فیلد ها را پر کنید"},{status:402})
//         }

//         const profile=await Profile.findOne({_id})

//         if(!user._id.equals(profile.userId)){
//             return NextResponse.json({error:"دسترسی شما به آگهی محدود شده"},{status:403})
//         }

//         profile.title=title;
//         profile.description=description
//         profile.location=location
//         profile.phone=phone
//         profile.price=price
//         profile.realState=realState
//         profile.amenities=amenities
//         price.rules=rules
//         profile.category=category
//         profile.constructionDate=constructionDate 
//         profile.save()

//         return NextResponse.json({messegae:"آگهی با موفقیت ویرایش شد "},{status:201})

//     }catch(error){
//         console.log(error)
//         return NextResponse.json({error:"مشکلی در سرور رخ داده"},{status:500})
//     }
// }



export async function PATCH(req) {
    try {
      await connectDB();
  
      const {
        _id,
        title,
        description,
        location,
        phone,
        realState,
        price,
        constructionDate,
        category,
        amenities,
        rules,
      } = await req.json();
  
      const session = await getServerSession(req);
      if (!session) {
        return NextResponse.json(
          {
            error: "لطفا وارد حساب کاربری خود شوید",
          },
          { status: 401 }
        );
      }
  
      const user = await User.findOne({ email: session.user.email });
      if (!user) {
        return NextResponse.json(
          { error: "حساب کاربری یافت نشد" },
          { status: 404 }
        );
      }
  
      if (
        !_id ||
        !title ||
        !location ||
        !description ||
        !phone ||
        !realState ||
        !price ||
        !constructionDate ||
        !category
      ) {
        return NextResponse.json(
          { error: "لطفا اطلاعات معتبر وارد کنید" },
          { status: 400 }
        );
      }
  
      const profile = await Profile.findOne({ _id });
      if (!user._id.equals(profile.userId)) {
        return NextResponse.json(
          {
            error: "دستری شما به این آگهی محدود شده است",
          },
          { status: 403 }
        );
      }
  
      profile.title = title;
      profile.description = description;
      profile.location = location;
      profile.phone = phone;
      profile.realState = realState;
      profile.price = price;
      profile.constructionDate = constructionDate;
      profile.amenities = amenities;
      profile.rules = rules;
      profile.category = category;
      profile.save();
  
      return NextResponse.json(
        {
          message: "آگهی با موفقیت ویرایش شد",
        },
        {
          status: 200,
        }
      );
    } catch (err) {
      console.log(err);
      return NextResponse.json(
        { error: "مشکلی در سرور رخ داده است" },
        { status: 500 }
      );
    }
  }
  