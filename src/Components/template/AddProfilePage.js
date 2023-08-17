"use client"

import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";


import TextInput from "../module/TextInput";
import RadioButton from "../module/RadioButton";
import TextList from "../module/TextList";
import CoustomDate from "../module/CoustomDate";
import Loader from "../module/Loader";
import { useRouter } from "next/navigation";

function AddProfilePage({data}) {

    const [profileData, setProfileData] = useState({
        title: "",
        description: "",
        location: "",
        phone: "",
        price: "",
        realState: "",
        constructionDate: new Date(),
        category: "",
        rules: [],
        amenities: [],
      });

      const [loading,setLoading]=useState(false);

      const submit=async()=>{
        setLoading(true)
        const res=await fetch("/api/profile",{
          method:"POST",
          body:JSON.stringify(profileData),
          headers:{"Content-Type":"application/json"}
        })
        const data=await res.json()
        setLoading(false)
        if(data.error){
          toast.error(data.error)
        } else{
          toast.success(data.messegae)
        }
      }

      const router=useRouter()

      useEffect(()=>{
        if(data) setProfileData(data)
      },[])

      const editeHandelr=async()=>{
        setLoading(true)

        const res=await fetch("/api/profile",{
          method:"PATCH",
          body:JSON.stringify(profileData),
          headers:{"Content-Type":"application/json"},
        })
        const data=await res.json()
        setLoading(false)
        if(data.error){
          toast.error(data.error)
        } else{
          toast.success(data.messegae)
          router.refresh()
        }
      }

  return (
    <div>
        <div className="bg-gray-300 p-2 rounded-lg">
        <h3>{data ? "ویرایش آگهی" : "ثبت آگهی"}</h3>
        </div>
        <TextInput name="title" title="عنوان آگهی" profileData={profileData} setProfileData={setProfileData}/>
        <TextInput name="description" title="توضیحات" profileData={profileData} setProfileData={setProfileData} textArea={true}/>
        <TextInput name="location" title="آدرس" profileData={profileData} setProfileData={setProfileData}/>
        <TextInput name="phone" title="شماره تماس" profileData={profileData} setProfileData={setProfileData}/>
        <TextInput name="price" title="قیمت (تومان)" profileData={profileData} setProfileData={setProfileData}/>
        <TextInput name="realState" title="بنگاه" profileData={profileData} setProfileData={setProfileData}/>
        <RadioButton profileData={profileData} setProfileData={setProfileData}/>
        <TextList title="امکانات رفاهی" profileData={profileData} setProfileData={setProfileData} type="amenities"/>
        <TextList title="قوانین" profileData={profileData} setProfileData={setProfileData} type="rules"/>
        <CoustomDate profileData={profileData} setProfileData={setProfileData}/>
        <div className="flex justify-center">
          {
            loading ? 
            <Loader/> :data ? (
            <button className="bg-blue-500 p-2 w-[200px] text-white rounded-md hover:w-[230px] duration-300 mt-3" onClick={editeHandelr}>ویرایش آگهی</button> 
            ) : (
              <button className="bg-blue-500 p-2 w-[200px] text-white rounded-md hover:w-[230px] duration-300 mt-3" onClick={submit}>ثبت آگهی</button> 
            )
          }
        </div>
        <Toaster/>
    </div>
  )
}

export default AddProfilePage