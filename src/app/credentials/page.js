import CredentialsPage from '@/template/CredentialsPage'
import React from 'react'

async function Ceredntials({searchParams}) {
  const res=await fetch("http://localhost:3000/api/profile",{cache:"no-store"})
  const data=await res.json()

  let finalData=data.profiles

  if(searchParams.category){
    finalData=finalData.filter((i)=>i.category===searchParams.category)
  }

  return (
    <div>
      <CredentialsPage data={finalData}/>
    </div>
  )
}

export default Ceredntials