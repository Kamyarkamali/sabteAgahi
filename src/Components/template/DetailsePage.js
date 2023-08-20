import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";
import { RiHome3Line } from "react-icons/ri"
import { BiStore } from "react-icons/bi"
import { GiOfficeChair } from "react-icons/gi"
import { MdApartment } from "react-icons/md";
import ListUl from "../module/ListUl";
import { e2p, sp } from "@/utils/replaceNumber";
import Categorys from "../module/Categorys";
import Shared from "../module/Shared";

function DetailsePage({data}) {
    const categorise={
        aparteman:"آپارتمان",
        villa:"ویلا",
        office:"دفتر",
        store:"مغازه"
    }

    const icons={
        villa:<RiHome3Line/>,
        aparteman:<MdApartment/>,
        office:<GiOfficeChair/>
    }

    console.log(data)
  return (
    <div className='mt-5 flex justify-between'>
        <div>

            <h1 className='text-2xl text-blue-600'>{data.title}</h1>
            <span className="flex items-center mt-2 text-blue-600">
                <HiOutlineLocationMarker color="blue" size={20}/>
                {data.location}
            </span>
            <h3 className="border-b-[2px] text-xl text-blue-500 border-black max-w-[700px] mt-3">توضیحات</h3>
            <p className="text-gray-600 mt-3"> {data.description} </p>

            <h3 className="border-b-[2px] text-xl text-blue-500 border-black max-w-[700px] mt-3">امکانات</h3>

            <ListUl data={data.amenities}/>

            <ListUl data={data.rules}/>
        </div>

        <div className="shadow-lg flex flex-col items-center rounded-md w-[200px] shadow-black h-[300px]">
            <SiHomebridge size={30} color="blue"/>
            <div className="flex items-center mt-4">
                <AiOutlinePhone size={20} color="gray"/>
                <span className="text-gray-400 text-md">
                {e2p(data.phone)}
                </span>
            </div>

            <p>
             {sp(data.price)} تومان
            </p>
            <p className="flex items-center">
                <BiCalendarCheck color="blue" size={20}/>
                {new Date(data.constructionDate).toLocaleDateString("fa-IR")}
            </p>
            <div className="mt-5">
            <Shared/>
            </div>
        </div>
    </div>
  )
}

export default DetailsePage