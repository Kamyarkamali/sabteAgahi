import Image from 'next/image'
import Link from 'next/link'

function Categorys({name,title}) {
  return (
    <div>
        <div className='bg-gray-[#eee] border-[1px] p-2 shadow-lg shadow-[#999] hover:rotate-[5deg] duration-300 cursor-pointer rounded-md border-blue-600 max-w-[400px]'>
            <Link href={"/"}>
            <Image className='object-cover rounded-md h-[140px]' width={200} height={200} src={`/images/${name}.png`} alt={name}/>
            </Link>
            <p className='text-center mt-2 text-blue-700 text-xl'>{title}</p>
        </div>
    </div>
  )
}

export default Categorys