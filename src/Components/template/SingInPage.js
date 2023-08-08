"use client"

import Link from 'next/link'
import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

import { Bars } from 'react-loader-spinner';

import { signIn } from "next-auth/react";

function SingInPage() {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [loading,setLoading]=useState(false)


  const singInHandeler=async(e)=>{
    e.preventDefault()

    setLoading(true)
    
    const res=await signIn("credentials",{
      email,
      password,
      redirect:false
    })

    if(res.error){
      toast.error(res.error)
    } else if(res.ok){
      toast.success("خوش آمدید")
      window.location.href="/"

    }

    setLoading(false)    
  }

  return (
    <div className='flex flex-col items-center justify-center h-[90vh]'>
      <h1 className='text-2xl text-blue-600'>فرم ورود</h1>
      <form className='flex flex-col items-center justify-around w-[300px] border-[2px] border-blue-500 rounded-md p-4 h-[50vh]'>
        <label>ایمیل</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} className='border-2 w-[200px] rounded-md text-gray-500 outline-none hover:border-blue-400 duration-300' type='email' placeholder='ایمیل خود را وارد کنید'/>
        <label>رمز عبور</label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} className='border-2 w-[200px] rounded-md text-gray-500 outline-none hover:border-blue-400 duration-300' type='password' placeholder='پسورد خود را وارد کنید'/>

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
        <button onClick={singInHandeler} type='submit' className='bg-blue-600 p-1 w-[200px] text-white rounded-md hover:w-[230px] duration-300'>ورود</button>
      )}

      </form>
      <div className='flex items-center gap-3 mt-4'>
      <p>اکانت کاربری ندارید؟</p>
      <Link className='text-blue-700 text-md' href={"/singup"}> ساخت اکانت</Link>
      </div>
      <Toaster/>
    </div>
  )
}

export default SingInPage