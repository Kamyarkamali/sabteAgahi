import DashboardPage from "@/layout/DahbordPage"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { redirect } from "next/navigation"

async function LayoutPage({children}) {
  const session=await getServerSession(authOptions)

  if(!session) redirect("/singin")

  return (
    <DashboardPage>{children}</DashboardPage>
  )
}

export default LayoutPage