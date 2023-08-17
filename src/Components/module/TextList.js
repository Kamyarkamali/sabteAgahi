import {MdOutlineLibraryAdd} from "react-icons/md"
import {AiOutlineDelete} from "react-icons/ai"


function TextList({title,type,profileData,setProfileData}) {

    const addHandeler=()=>{
        setProfileData({...profileData,[type]:[...profileData[type], ""]})
    }

    const changeHandeler=(e,index)=>{
        const {value}=e.target

        const list=[...profileData[type]]
        list[index]=value
        setProfileData({...profileData,[type]:list})
    }
    const deletHandeler=(index)=>{
        const list=[...profileData[type]]
        list.splice(index,1)
        setProfileData({...profileData,[type]:list})
    }

  return (
    <div className="mt-4">
        <p>{title}</p>
        <button onClick={addHandeler} className="flex items-center bg-blue-500 text-white p-1 rounded-md">افزودن<MdOutlineLibraryAdd/></button>
        {profileData[type].map((item,index)=>(
                <div key={index} className="flex items-center gap-3">
                <input value={item} onChange={(e)=>changeHandeler(e,index)} type="text" className="border-2 border-gray-400 w-[200px] rounded-md mt-4 outline-none"/>
                <button onClick={()=>deletHandeler(index)} className="border-2 flex items-center border-gray-500 bg-red-500 text-white rounded-md">حذف<AiOutlineDelete/></button>
                </div>
        ))}
    </div>
  )
}

export default TextList