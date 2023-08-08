import React from 'react'

function DashboardPage({createdAt}) {
  return (
    <div>
        <h3 className='text-xl text-blue-600'>خوش آمدید</h3>
        <p>آگهی خود را ثبت کنید تا هزارا بار بازدید بشود</p>
        <div className='flex gap-4'>
            <p className='font-bold'>تاریخ عضویت:</p>
            <span>{new Date(createdAt).toLocaleDateString("fa-IR")}</span>
        </div>
    </div>
  )
}

export default DashboardPage