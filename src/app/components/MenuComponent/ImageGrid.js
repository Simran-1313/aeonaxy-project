import Image from 'next/image'
import React from 'react'


const ImageGrid = ({ items }) => {
  return (
    <>
      <div className='grid  lg:grid-cols-3  md:px-5  md:py-3 justify-center   gap-6 sm:flex-col md:grid-cols-2 px-[2rem]  overflow-x-hidden' >
        {items.map((item, index) => (
          <div key={index} className=' md:px-10  pt-2 md:pt-0  hover:cursor-pointer'>
            <Image src={item.img} width={200} height={300} className=' rounded-lg  w-[250px] h-[250px] mx-auto ' />
            <div className='flex-col' >
              <h2 className='flex justify-center lg:text-2xl sm:text-base font-bold text-black/70 my-4 ' >{item.name}</h2>
              <p className=' flex justify-center lg:text-base text-gray-500  sm:text-sm font-semibold' >{item.Desc}</p>
              <h3 className='text-red-500 font-bold lg:text-4xl sm:text-base flex justify-center my-3' >{item.price}</h3>
            </div>
          </div>
        ))}
      </div>

    </>
  )
}

export default ImageGrid