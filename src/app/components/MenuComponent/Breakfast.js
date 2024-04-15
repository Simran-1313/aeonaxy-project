import React from 'react'

import ImageGrid from './ImageGrid'

const data = [
  {
    "img": "/menu /breakfast/breakfast_7.png",
    "name": "Magnum Tiste",
    "Desc": " Lorem,deren,filde,nerada",
    "price": "$5.95",
  },
  {
    "img": "/menu /breakfast/breakfast_8.png",
    "name": "Aut Luia",
    "Desc": " Lorem,deren,filde,nerada",
    "price": "$5.95",
  },
  {
    "img": "/menu /breakfast/breakfast_9.png",
    "name": "Est Elgendi",
    "Desc": " Lorem,deren,filde,nerada",
    "price": "$5.95",
  },
  {
    "img": "/menu /breakfast/breakfast_10.png",
    "name": "Cumque Nostrud",
    "Desc": "Lorem ipsum dolor sit amet",
    "price": "$7.95"
  },
  {
    "img": "/menu /breakfast/breakfast_11.png",
    "name": "Ullamco Labore et dolore",
    "Desc": "Ipsum dolor sit amet",
    "price": "$6.95",
  },
  {
    "img": "/menu /breakfast/breakfast_12.png",
    "name": "Ullamco Labore et dolore",
    "Desc": "Ipsum dolor sit amet",
    "price": "$6.95",
  }
]



const Breakfast = () => {
  return (
    <>
      <div className=' flex flex-col items-center justify-center px-5 text-center  pt-10'>
        <p className='text-gray-500 py-1'>MENU</p>
        <p className='text-3xl font-bold '> <span className='text-red-700'>Breakfast</span></p>
      </div>
      <div className='h-auto my-[3rem]'><ImageGrid items={data} /> </div>
    </>
  )
}

export default Breakfast