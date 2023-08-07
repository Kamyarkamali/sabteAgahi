import React from 'react'

function Footer() {
  return (
    <footer className='flex flex-col md:flex-row justify-between items-center rounded-lg bg-blue-600 text-white leading-[30px]'>
        <div className='text-center mb-3 md:text-center text-gray-100'>
            <h3>درج آگهی های شما</h3>
            <p>آگهی ها خود را در تمام موارد به ما بسپارید ,با سرعتی بالا و کاربرانی  نامحدود از بقیه یک قدم جلوتر باشید</p>
        </div>
        <div>
            <ul className='p-1'>
                <li>درج آگهی در سریع ترین زمان</li>
                <li>رعایت کامل قوانین</li>
                <li>قرار نداشتن واسطه</li>
                <li>احراز هویت آگهی دهنده و مصرف کننده</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer