"use client"
import Link from 'next/link'
import React from 'react'

import {FiLogIn} from "react-icons/fi";

//icons
import {AiOutlineUser} from "react-icons/ai";
import { useSession } from 'next-auth/react';

function Header() {

    const {data}=useSession()

  return (
    <header className='flex items-center justify-between bg-blue-600 p-3 mt-4 rounded-lg'>
        <div className='text-white'>
            <ul className='flex items-center gap-4'>
                <li>
                    <Link href={"/"}>صفحه اصلی</Link>
                </li>
                <li>
                    <Link href={"/credentials"}>آگهی ها</Link>
                </li>
            </ul>
        </div>
        {data ? (
            <div className='border-2 rounded-md cursor-pointer'>
                <Link href={"/dashboard"}>
            <AiOutlineUser size={23} color='white'/>
                </Link>
            </div>
        ) : (
            <div className='bg-white p-1 rounded-lg hover:bg-blue-600 duration-300 hover:text-white'>
            <Link href={"/singup"} className='flex items-center'>
                <FiLogIn/>
                <span>ورود</span>
            </Link>
        </div>
        )}
    </header>
  )
}

export default Header