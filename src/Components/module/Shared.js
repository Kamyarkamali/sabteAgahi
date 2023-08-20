"use client"

import { LuShare } from "react-icons/lu"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { useEffect, useState } from "react"



function Shared() {
    const [url,setUrl]=useState("")

    useEffect(()=>{
        setUrl(window.location.href)
    },[])

  return (
    <CopyToClipboard text={url}>
    <div>
        <div className="flex items-center">
        <LuShare size={20} color="blue"/>
        <button className="mt-1">
            اشتراک گذاری
        </button>
        </div>
    </div>
    </CopyToClipboard>
  )
}



export default Shared