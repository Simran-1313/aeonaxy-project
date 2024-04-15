'use client'
import { useState } from 'react'
import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import Starters from '@/app/components/MenuComponent/Starters'
import Breakfast from '@/app/components/MenuComponent/Breakfast'
import Lunch from '@/app/components/MenuComponent/Lunch'
import Dinner from '@/app/components/MenuComponent/Dinner'

const Menupage = () => {
  const [selectedContent, setSelectedContent] = useState('Starters');

  const handleClick = (content) => {
    setSelectedContent(content);
  };

  const SelectedHeadingCSS = 'lg:text-2xl text-base  font-semibold  mx-2  md:mx-5 text-red-600 relative group';
  const NonSelectedHeadingCSS = 'lg:text-2xl text-base  font-semibold mx-2 md:mx-5 text-black relative group'

  return (
    <>
      <main className='w-full h-full my-10  overflow-hidden overflow-x-hidden' id='menu' >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
        >
          <div className=' flex flex-col items-center justify-center px-5 text-center py-10  '>
            <p className='text-gray-500 py-1'>OUR MENU</p>
            <p className='text-2xl '>CHECK OUR <span className='text-red-700'> YUMMY MENU</span></p>
          </div>
        </motion.div>
        <div className='w-full flex  justify-center items-center' >
          <div onClick={() => handleClick('Starters')} className={`${selectedContent === 'Starters' ? SelectedHeadingCSS : NonSelectedHeadingCSS} `}>Starters
            <span className={`h-[2px] w-0 inline-block  bg-red-600 absolute left-0 -bottom-1 transition-[width]  ${selectedContent === 'Starters' ? 'w-full' : 'w-0'} `} >&nbsp;</span>
          </div>
          <div onClick={() => handleClick('Breakfast')} className={`${selectedContent === 'Breakfast' ? SelectedHeadingCSS : NonSelectedHeadingCSS} `} >Breakfast
            <span className={`h-[2px] w-0 inline-block  bg-red-600 absolute left-0 -bottom-1 transition-[width]  ${selectedContent === 'Breakfast' ? 'w-full' : 'w-0'} `} >&nbsp;</span>
          </div>
          <div onClick={() => handleClick('Lunch')} className={`${selectedContent === 'Lunch' ? SelectedHeadingCSS : NonSelectedHeadingCSS} `} >Lunch
            <span className={`h-[2px] w-0 inline-block  bg-red-600 absolute left-0 -bottom-1 transition-[width]  ${selectedContent === 'Lunch' ? 'w-full' : 'w-0'} `} >&nbsp;</span>
          </div>
          <div onClick={() => handleClick('Dinner')} className={`${selectedContent === 'Dinner' ? SelectedHeadingCSS : NonSelectedHeadingCSS} `}>Dinner
            <span className={`h-[2px] w-0 inline-block  bg-red-600 absolute left-0 -bottom-1 transition-[width]  ${selectedContent === 'Dinner' ? 'w-full' : 'w-0'} `} >&nbsp;</span>
          </div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='w-full h-full '
            key={selectedContent}
          >
            {selectedContent === 'Starters' && <Starters />}
            {selectedContent === 'Breakfast' && <Breakfast />}
            {selectedContent === 'Lunch' && <Lunch />}
            {selectedContent === 'Dinner' && <Dinner />}
          </motion.div>
        </div>

      </main>
    </>
  )
}

export default Menupage