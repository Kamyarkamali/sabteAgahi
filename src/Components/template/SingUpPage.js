"use client"

import Link from 'next/link'
import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

import { Bars } from 'react-loader-spinner';

function SingUpPage() {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [rePassword,seRePassword]=useState("")
  const [loading,setLoading]=useState(false)


  const singupHandeler=async(e)=>{
    e.preventDefault()

    if(password!==rePassword){
      toast.error("رمز های عبور برابر نیستند")
      seRePassword("")
      setPassword("")
      return
    }
    setLoading(true)
    const res=await fetch("/api/auth/singup",{
      method:"POST",
      body:JSON.stringify({email,password}),
      headers:{"Content-Type":"application/json"},
    })
    const data=await res.json()
    setLoading(false)

    if(data.erorr){
      toast.error("حساب کاربری وجود دارد")
      window.location.href="/singin"
    } else if(data.erorr){
      toast.error(data.erorr)
    } else if(data.message){
      toast.success("اکانت ساخته شد")
      window.location.href="/singin"
    }
  }

  return (
    <div className='flex flex-col items-center justify-center h-[90vh]'>
      <h1 className='text-2xl text-blue-600'>فرم ثبت نام</h1>
      <form className='flex flex-col items-center justify-around w-[300px] border-[2px] border-blue-500 rounded-md p-4 h-[50vh]'>
        <label>ایمیل</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} className='border-2 w-[200px] rounded-md text-gray-500 outline-none hover:border-blue-400 duration-300' type='email' placeholder='ایمیل خود را وارد کنید'/>
        <label>رمز عبور</label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} className='border-2 w-[200px] rounded-md text-gray-500 outline-none hover:border-blue-400 duration-300' type='password' placeholder='پسورد خود را وارد کنید'/>
        <label>تکرار رمز عبور</label>
        <input value={rePassword} onChange={(e)=>seRePassword(e.target.value)} className='border-2 w-[200px] rounded-md text-gray-500 outline-none hover:border-blue-400 duration-300' type='password' placeholder='پسورد خود را تکرار کنید'/>

      {loading ? (
        <Bars
        height="40"
        width="60"
        color="blue"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
      ) : (
        <button onClick={singupHandeler} type='submit' className='bg-blue-600 p-1 w-[200px] text-white rounded-md hover:w-[230px] duration-300'>ثبت نام</button>
      )}

      </form>
      <div className='flex items-center gap-3 mt-4'>
      <p>اکانت کاربری دارید؟</p>
      <Link className='text-blue-700 text-md' href={"/singin"}>ورود به اکانت</Link>
      </div>
      <Toaster/>
    </div>
  )
}

export default SingUpPage