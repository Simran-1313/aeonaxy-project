'use client'
import { useRouter } from 'next/navigation'; 
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import toast from "react-hot-toast";
import { motion } from 'framer-motion';
import SmallNavbar from '@/app/components/SmallNavbar';

const images = [
  { id: 1, src: '/1.jpeg', alt: 'Hiring' },
  { id: 2, src: '/2.jpeg', alt: 'Designer' },
  { id: 3, src: '/3.jpeg', alt: 'Creater' },
];



const ImageSelector = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [purpose,setpurpose] = useState("");
  const[empty,setempty] = useState(true)
  const session = useSession();
  const { status,update } = session;
  useEffect(() => {
    
    // if (status !== "authenticated") {
        
    //   router.push("/steps/login");
    //   }
    
  }, [status, session]);
  
  const handleImageChange = (image) => {
    setSelectedImage(image);
    setpurpose(image.alt);
    setempty(false);
  };

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();
  if(empty=== true){
    return toast.error("Please select an image");

  }
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
      
          purpose,
          
        }),
      });
      if (response.ok) {resolve();
        router.push("/");
        
      
      }
      else reject();
    });

    await toast.promise(savingPromise, {
      loading: "Saving...",
      success: "Successfully Saved!",
      error: "Error Saving",
    });
  
 
  }

  const router = useRouter();

  return (

   <>
   <SmallNavbar/>
    <div className='flex-row mt-24  h-[70vh] mb-12 ' >
      <h1 className='text-center text-primary text-4xl mb-4 ' >
        Describe Yourself
      </h1>
     <div className='grid place-content-center' >
     <div className="grid lg:grid-cols-3  md:grid-cols-3  sm:grid-cols-2 grid-cols-2 gap-4 place-items-center  mx-16  my-8  ">
      
      {images.map((image) => (
        <motion.label
          key={image.id}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative cursor-pointer  "
        >
          <input
            type="radio"
            name="image"
            value={image.src}
            checked={selectedImage === image}
            onChange={() => handleImageChange(image)}
            className="sr-only"
          />
          
          <div className='w-full h-full block justify-center ' >
          <img
            src={image.src}
            alt={image.alt}
            className="w-40 h-40 flex justify-center object-cover rounded-lg"
          />
          
          </div>
          <div className='flex justify-center  '>
          <span className='text-2xl   ' >
              {image.alt}
            </span>
          </div>
          <div>
            
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: selectedImage === image ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>
        </motion.label>
      ))}
    </div>
     </div>
   <div className='w-full flex justify-center  my-12 ' >
   <button type='button'   className="px-4 w-[5rem]  mx-4 py-2 text-sm font-semibold text-gray-500" onClick={()=>{router.push('/steps/step2');}} > back </button>

<button type='submit'className='w-[5rem]  flex justify-center '  onClick={handleProfileInfoUpdate}>Save</button>
   </div>
    </div>
   </>
  );
};

export default ImageSelector;
