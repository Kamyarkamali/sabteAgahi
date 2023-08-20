import React from 'react'

function ListUl({data}) {
  return (
    <div>
        <h3 className="border-b-[2px] text-xl text-blue-500 border-black max-w-[700px] mt-3">قوانین</h3>
            {data.length ? ( 
                <ul>
                    {data.map((i,index)=> <li key={index}>{i}</li>)}
                </ul>
            ) : (
                <p className="bg-red-400 w-[400px] rounded-md text-white mt-4">هیچ موردی درج نشده است</p>
            )}
    </div>
  )
}

export default ListUl