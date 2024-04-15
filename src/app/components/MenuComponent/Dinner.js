import React from 'react'
import ImageGrid from './ImageGrid'

const data = [
  {
    "img": "/menu /dinner/dinner_19.png",
    "name": "Magnum Tiste",
    "Desc": " Lorem,deren,filde,nerada",
    "price": "Rs 500/-",
  },
  {
    "img": "/menu /dinner/dinner_20.png",
    "name": "Aut Luia",
    "Desc": " Lorem,deren,filde,nerada",
    "price": "Rs 600/-",
  },
  {
    "img": "/menu /dinner/dinner_21.png",
    "name": "Est Elgendi",
    "Desc": " Lorem,deren,filde,nerada",
    "price": "Rs 600/-",
  },
  {
    "img": "/menu /dinner/dinner_22.png",
    "name": "Cumque Nostrud",
    "Desc": "Lorem ipsum dolor sit amet",
    "price": "Rs 600/-"
  },
  {
    "img": "/menu /dinner/dinner_23.png",
    "name": "Ullamco Labore et dolore",
    "Desc": "Ipsum dolor sit amet",
    "price": "Rs 700/-",
  },
  {
    "img": "/menu /dinner/dinner_24.png",
    "name": "Ullamco Labore et dolore",
    "Desc": "Ipsum dolor sit amet",
    "price": "Rs 800/-",
  }
]


const Dinner = () => {
  return (
    <>
      <div className=' flex flex-col items-center justify-center px-5 text-center  pt-10'>
        <p className='text-gray-500 py-1'>MENU</p>
        <p className='text-3xl font-bold '> <span className='text-red-700'>DINNER</span></p>
      </div>
      <div className='h-auto my-[3rem]'><ImageGrid items={data} /></div>
    </>
  )
}

export default Dinner