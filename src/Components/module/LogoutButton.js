"use client"

import { FiLogOut } from "react-icons/fi"
import { signOut } from "next-auth/react"

function LogoutButton() {
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={signOut}>
        <FiLogOut size={20} color="blue"/>
        <p>خروج</p>
    </div>
  )
}

export default LogoutButton