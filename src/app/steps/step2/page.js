'use client'

import ImageSelector from '../../components/ImageSelector';
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import user from '../../../../public/user.svg'
import toast from "react-hot-toast";
import Image from 'next/image';
import SmallNavbar from '@/app/components/SmallNavbar';
const MyComponent = () => {
 const router = useRouter();

  const session = useSession();
   const [image, setImage] = useState("");

  const { status,update } = session;

 useEffect(() => {
  
    
  if (status === "authenticated") {
    
  
    fetch("/api/profile").then((response) => {
      response.json().then((data) => {
        setImage(data.image)
      });
    });
  }
}, [status, session]);

  const images = [
    { id: 1, src: '/avatars/avatar1.jpg', alt: 'Image 1' },
    { id: 2, src: '/avatars/avatar2.jpg', alt: 'Image 2' },
    { id: 3, src: '/avatars/avatar3.jpg', alt: 'Image 3' },
    { id: 4, src: '/avatars/avatar4.jpg', alt: 'Image 4'},
    { id: 1, src: '/avatars/avatar5.jpg', alt: 'Image 5' },
   
    
    { id: 4, src: '/avatars/avatar8.jpg', alt: 'Image 8'},
  ];
  
  console.log(session)
  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();
 
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
      
          image,
          
        }),
      });
      if (response.ok) {resolve();
        router.push("/steps/step3");
        
      
      }
      else reject();
    });

    await toast.promise(savingPromise, {
      loading: "Saving...",
      success: "Successfully Saved!",
      error: "Error Saving",
    });
  }
  

  return (
    
    < >
    <SmallNavbar/>
    <div className='max-w-xs mb-16 h-[70vh] mx-auto mt-24 ' >
     <h1 className='text-center text-primary text-4xl mb-4 ' >
        Add your Avatar
      </h1>
      <h1 className='text-center text-gray-500  mb-8 ' >
        Customise according to your choice 
      </h1>
      <div className='flex mx-auto my-8 mb-10  justify-center ' >
      <div className='flex justify-center' >
      {image ? (
                <Image
                  className=" w-[200px]  rounded-full border-gray-300 flex justify-center border-4 p-1  "
                  width={150}
                  height={150}
                  src={image}
                  alt={"avatar"}
                />
              ):(<Image
                className="  w-[150px] rounded-full border-gray-300 flex justify-center border-4 p-1   "
                width={150}
                height={150}
                src={user}
                alt={"avatar"}
              />)}
      </div>

      <ImageSelector className="  " images={images} onSelect={(image)=>{setImage(image.src)}} />
      
      </div>
      <div className='w-full flex justify-center my-12 ' > 
      <button type='button'   className="px-4 w-[5rem]  mx-4 py-2 text-sm font-semibold text-gray-500" onClick={()=>{router.push('/steps/step1');}} > back </button>
      <button type='submit' className='w-[5rem]  flex justify-center ' onClick={handleProfileInfoUpdate}>Save</button>
      
    </div>
    </div>
    </>
  );
};

export default MyComponent;

