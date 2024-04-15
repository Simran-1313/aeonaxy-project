import React from 'react'
import ImageGrid from './ImageGrid'

const data = [
  {
    "img": "/menu /starters/starter_1.png",
    "name": "Magnum Tiste",
    "Desc": " Lorem,deren,filde,nerada",
    "price": "Rs 400/-",
  },
  {
    "img": "/menu /starters/starter_2.png",
    "name": "Aut Luia",
    "Desc": " Lorem,deren,filde,nerada",
    "price": "Rs 500/-",
  },
  {
    "img": "/menu /starters/starter_3.png",
    "name": "Est Elgendi",
    "Desc": " Lorem,deren,filde,nerada",
    "price": "Rs 400/-",
  },
  {
    "img": "/menu /starters/starter_4.png",
    "name": "Cumque Nostrud",
    "Desc": "Lorem ipsum dolor sit amet",
    "price": "Rs 500/-"
  },
  {
    "img": "/menu /starters/starter_5.png",
    "name": "Ullamco Labore et dolore",
    "Desc": "Ipsum dolor sit amet",
    "price": "Rs 600/-",
  },
  {
    "img": "/menu /starters/starter_6.png",
    "name": "Ullamco Labore et dolore",
    "Desc": "Ipsum dolor sit amet",
    "price": "Rs 600/-",
  }
]

const Lunch = () => {
  return (
    <>

      <div className=' flex flex-col items-center justify-center px-5 text-center  pt-10'>
        <p className='text-gray-500 py-1'>MENU</p>
        <p className='text-3xl font-bold '> <span className='text-red-700'> LUNCH</span></p>
      </div>
      <div className='h-auto my-[3rem]'><ImageGrid items={data} /> </div>
    </>

  )
}

export default Lunch