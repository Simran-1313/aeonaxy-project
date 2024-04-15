'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ImageSelector = ({ images, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (image) => {
    onSelect(image);
    setIsOpen(false);
  };

  return (
    <div className="relative mt-4 flex justify-center items-center mx-8 ">
      <button onClick={() => setIsOpen(true)} className="bg-blue-500  w-[4rem] h-[2.5rem] text-white py-1 px-4 rounded-md">
        Edit
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full  h-full flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white  p-4 rounded-lg shadow-lg lg:w-[50%] md:w-[60%] sm:w-[70%] ">
            <div className='flex justify-end' >
            <button onClick={() => setIsOpen(false)} className="  w-[6rem]  mb-6 hover:bg-red-500 hover:text-white text-gray-600 md:text-sm ">
              Close
            </button>
            </div>
            <div className=" grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3  sm:grid-cols-2 xs:grid-cols-3 gap-4    h-[50vh] overflow-y-scroll overflow-x-clip  ">
              {images.map((image) => (
                <motion.img
                
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto  rounded-full cursor-pointer"
                  onClick={() => handleClick(image)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ImageSelector;

