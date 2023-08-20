//icons 
import Link from "next/link"
import { HiFilter } from "react-icons/hi"


function SiadBar() {
  const queryse=[
    {villa:"ویلا"},
    {aparteman:"آپارتمان"},
    {office:"دفتر"},
    {store:"مفازه"},
  ]
  return (
    <div>
      <div className="flex items-center justify-center p-2">
      <HiFilter color="blue" size={20}/>
      <p className="text-xl">دسته بندی</p>
      </div>
      <div className="flex flex-col items-center">
      <Link href={"/credentials"} className="text-gray-400">همه</Link>
      {
        queryse.map((query)=>(
          <Link className="text-gray-400" href={{pathname:"/credentials",query:{category:Object.keys(query)}}}>{Object.values(query)}</Link>
        ))
      }
      </div>
    </div>
  )
}

export default SiadBar