import Card from "../module/Card"
import SiadBar from "../module/SaidBar"



function CredentialsPage({data}) {
  return (
    <div>
        <div className="shadow-lg shadow-[gray] rounded-md mt-4 w-[200px] h-fit">
          <SiadBar/>
        </div>
        <div className="flex justify-center items-center">


            {data.map((item)=>(
                <Card data={item} key={item._id}/>
            ))}
        </div>
    </div>
  )
}

export default CredentialsPage