"use client"

import React from 'react'
import Card from './Card'

//icons
import { FiEdit } from "react-icons/fi"
import { AiOutlineDelete } from "react-icons/ai"
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

function DashboardCard({item}) {

  const router=useRouter()

  const editHandeler=()=>{
    router.push(`/dashboard/profile/${item._id}`)
  }

  const deletHandeler=async()=>{
    const res=await fetch(`/api/profile/delete/${item._id}`,{
      method:"DELETE",
    })
    const data=await res.json()
    console.log(data)

    if(data.error){
      toast.error(data.error)
    }else{
      toast.success(data.message)
      router.refresh()
    }
  }

  return (
    <div className='max-w-[630px] border-[1px] p-4 border-blue-500 rounded-md mt-5'>
        <Card data={item}/>
        <div className='flex flex-col md:flex-row gap-3 justify-evenly items-center mt-3'>
          <button onClick={editHandeler} className='flex items-center justify-center border-green-500 text-green-700 border-[2px] p-1 w-[130px] rounded-md'>
            ویرایش
            <FiEdit/>
          </button>
          <button onClick={deletHandeler} className='flex items-center justify-center border-red-500 text-red-700 border-[2px] p-1 w-[130px] rounded-md'>
            حذف
            <AiOutlineDelete/>
          </button>
        </div>
    </div>
  )
}

export default DashboardCard