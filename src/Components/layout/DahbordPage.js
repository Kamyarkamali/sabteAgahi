import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { CgProfile } from "react-icons/cg"
import Link from "next/link";
import LogoutButton from "../module/LogoutButton";

async function DahbordPage({children}) {
  const session=await getServerSession(authOptions)
  return (
    <div className='flex justify-between mt-[80px]'>
        <div className='flex flex-col gap-3 items-center h-fit p-[30px] ml-[40px] w-[220px] shadow-lg shadow-[#304ffe4a]'>
          <CgProfile size={30} color='blue'/>
          <Link href={"/dashboard"} className="text-gray-600 text-md">{session?.user.email}</Link>
          <Link href={"/dashboard/profile"}>حساب کاربری</Link>
          <Link href={"/dashboard/profile"}>آگهی های من</Link>
          <Link href={"/dashboard/profile"}>ثبت آگهی</Link>
          <LogoutButton/>
        </div>
        <div className='w-[100%]'>{children}</div>
    </div>
  )
}

export default DahbordPage