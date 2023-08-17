import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

function CoustomDate({profileData,setProfileData}) {

    const changeHandeler=(e)=>{
        const date=new Date(e)
        setProfileData({...profileData,constructionDate:date})
    }

  return (
    <div className="mt-4">
        <DatePicker
        value={profileData.constructionDate}
        calendar={persian}
        locale={persian_fa}
        onChange={changeHandeler}
        />
    </div>
  )
}

export default CoustomDate