import Link from 'next/link'
import React from 'react'

import {FiLogIn} from "react-icons/fi"

function Header() {
  return (
    <header className='flex items-center justify-between bg-blue-600 p-3 mt-4 rounded-lg'>
        <div className='text-white'>
            <ul className='flex items-center gap-4'>
                <li>
                    <Link href={"/"}>صفحه اصلی</Link>
                </li>
                <li>
                    <Link href={"/"}>آگهی ها</Link>
                </li>
            </ul>
        </div>
        <div className='bg-white p-1 rounded-lg'>
            <Link href={"/singin"} className='flex items-center'>
                <FiLogIn/>
                <span>ورود</span>
            </Link>
        </div>
    </header>
  )
}

export default Header