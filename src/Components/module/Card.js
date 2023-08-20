import Link from "next/link";
import { RiHome3Line } from "react-icons/ri"
import { MdApartment } from "react-icons/md"
import { BiStore } from "react-icons/bi"
import { BiLeftArrow } from "react-icons/bi"
import { GiPostOffice} from "react-icons/gi"
import { HiOutlineLocationMarker} from "react-icons/hi"
import { sp } from "@/utils/replaceNumber";

function Card({data}) {
    const {price,title,location,category,_id}=data

    const icons={
        "villa":<RiHome3Line/>,
        "aparteman":<MdApartment/>,
        "store":<BiStore/>,
        "office":<GiPostOffice/>
    }

  return (
    <div>
        <div className="max-w-[200px] flex items-center flex-col ml-3 border-[1px] mt-5 rounded-lg border-blue-600 p-3 text-blue-700 text-[20px]">
            {icons[category]}
            <p>{title}</p>
            <p className="flex items-center text-sm">
                <HiOutlineLocationMarker/>
                {location}
            </p>
            <p>{sp(price)}تومان</p>
            <div className="flex items-center justify-between">
            <Link href={`/credentials/${_id}`} className="text-sm">
                مشاهده آگهی ها 
                </Link>
            <BiLeftArrow/>
            </div>
        </div>
    </div>
  )
}

export default Card