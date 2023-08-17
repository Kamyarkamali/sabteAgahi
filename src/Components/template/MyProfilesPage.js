import React from 'react'
import DashboardCard from '../module/DashboardCard'

function MyProfilesPage({profiles}) {
  return (
    <div>
        {
            profiles.length ? null : <p className='bg-gray-300 p-2 text-center text-xl rounded-md'>هیچ آگهی ثبت نشده</p>
        }
        {profiles.map((item)=>(
            <DashboardCard key={item._id} item={JSON.parse(JSON.stringify(item))}/>
        ))}
    </div>
  )
}

export default MyProfilesPage