import Profile from "@/models/Profile"
import DetailsePage from "@/template/DetailsePage"
import connectDB from "@/utils/connectionDB"

async function ProfileId({params:{profileId}}) {
  await connectDB()
  const profile=await Profile.findOne({_id:profileId})

  if(!profile) return <h3>مکشلی پیش آمده است</h3>

  return (
    <div>
        <DetailsePage data={profile}/>
    </div>
  )
}

export default ProfileId