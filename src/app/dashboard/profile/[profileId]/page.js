import Profile from '@/models/Profile'
import AddProfilePage from '@/template/AddProfilePage'
import connectDB from '@/utils/connectionDB'
import React from 'react'

async function Edite({params}) {
const {profileId}=params

  await connectDB()
  const profile=await Profile.findOne({_id:profileId})

  if(!profile) return <h3>مشکلی پیش آمده است</h3>

  return (
    <AddProfilePage data={JSON.parse(JSON.stringify(profile))}/>
  )
}

export default Edite