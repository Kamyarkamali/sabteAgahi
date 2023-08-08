import DashboardPage from '@/template/DashboardPage'
import React from 'react'

import { getServerSession } from 'next-auth';
import User from '@/models/User';
import { authOptions } from '../api/auth/[...nextauth]/route';
import connectDB from '@/utils/connectionDB';

async function Dashboard() {
  await connectDB()

  const session=await getServerSession(authOptions);

  const user=await User.findOne({email:session.user.email})

  return (
    <div>
      <DashboardPage createdAt={user.createdAt}/>
    </div>
  )
}

export default Dashboard