import React from 'react'
import Categorys from '../module/Categorys'

function HomePage() {
    const citiys=["تهران","تبریز","اصفهان","شیراز","مشهد","کردستان","لرستان","کاشان"]
  return (
    <div>
        <div className='mt-5'>
            <h1 className='text-center text-blue-600 text-4xl font-bold'>ثبت آگهی فروش و اجاره املاک</h1>
            <ul className='flex justify-center gap-5 mt-4'>
                {
                    citiys.map((i,index)=>(
                        <li key={index} className='bg-gray-500 md:w-[60px] text-center text-white p-[1px] rounded-md hover:scale-105 duration-300 cursor-pointer'>{i}</li>
                    ))
                }
            </ul>
        </div>
        <div className='max-w-[1200px] mx-auto flex justify-center gap-3 mt-[8rem]'>
            <Categorys title="ویلا" name="villa"/>
            <Categorys title="آپارنمان" name="aparteman"/>
            <Categorys title="دفتر" name="office"/>
            <Categorys title="مغازه" name="store"/>
        </div>
        <div className='mt-[5rem]'>
            <h3 className='text-center mb-8 text-2xl text-blue-800'>شهرهای پربازدید</h3>
            <ul className='grid grid-cols-8 gap-4 md:gap-0'>
                {
                    citiys.map((i,index)=>(
                        <li key={index} className='bg-gray-400 md:w-[80px] text-center p-[1px] rounded-md hover:scale-105 duration-300 cursor-pointer text-black font-bold'>{i}</li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default HomePage