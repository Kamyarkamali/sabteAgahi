import React from 'react'

function RadioButton({profileData,setProfileData}) {
    const {category}=profileData

    const changeHandeler=(e)=>{
        const {name,value}=e.target
        setProfileData({...profileData,[name]:value})
    }

  return (
    <div className='mt-5'>
        <p>دسته بندی</p>
        <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2 text-blue-700 bg-gray-300 w-fit p-1 rounded-md'>
                <label htmlFor='villa'>ویلا</label>
                <input type='radio' name='category' value="villa" id="villa" checked={category==="villa"} onChange={changeHandeler}/>
            </div>

            <div className='flex items-center gap-2 text-blue-700 bg-gray-300 w-fit p-1 rounded-md'>
                <label htmlFor='aparteman'>آپارتمان</label>
                <input type='radio' name='category' value="aparteman" id="aparteman" checked={category==="aparteman"} onChange={changeHandeler}/>
            </div>

            <div className='flex items-center gap-2 text-blue-700 bg-gray-300 w-fit p-1 rounded-md'>
                <label htmlFor='store'>مغازه</label>
                <input type='radio' name='category' value="store" id="store" checked={category==="store"} onChange={changeHandeler}/>
            </div>
        </div>
    </div>
  )
}

export default RadioButton