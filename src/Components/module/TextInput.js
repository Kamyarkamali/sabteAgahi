import { p2e } from '@/utils/replaceNumber'
import React from 'react'

function TextInput({title,name,profileData,setProfileData,textArea=false}) {

    const changeHandeler=(e)=>{
        const {name,value}=e.target
        setProfileData({...profileData,[name]:p2e(value)})
    }

  return (
    <div className='flex mt-8 flex-col'>
        <p>{title}</p>
        {textArea ? <textarea className='border-2 resize outline-none w-[250px] border-gray-400 rounded-md' type="text" name={name} value={profileData[name]} onChange={changeHandeler}/> : <input className='border-2 w-[300px] rounded-md outline-none border-gray-400' type='text' name={name} value={profileData[name]} onChange={changeHandeler}/>}
    </div>
  )
}

export default TextInput