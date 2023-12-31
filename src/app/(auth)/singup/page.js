import SingUpPage from '@/template/SingUpPage'

import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import {redirect} from "next/navigation"

async function page() {
  const session=await getServerSession(authOptions)

  if(session) redirect("/")

  return (
    <div>
        <SingUpPage/>
    </div>
  )
}

export default page