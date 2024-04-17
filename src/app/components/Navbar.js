'use client'
import React from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import user from '../../../public/user.svg'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const session = useSession();
  const router = useRouter();

  const status = session?.status;
  const userData = session.data?.user  ;
  const [image, setImage] = useState("");
 let userName = userData?.name || userData?.email;
 if(userName && userName.includes(' ')){
  userName = userName.split(' ')[0];
  
 }
 if(userName && userName.length>7){
  userName = userName.slice(0,7) + '...'
console.log(userName)
}


 const [isDesktop, setIsDesktop] = useState(false);

 useEffect(() => {
  
    
  if (status === "authenticated") {
    
  
    fetch("/api/profile").then((response) => {
      response.json().then((data) => {
        setImage(data.image)
      });
    });
  }
}, [status, session]);

  useEffect(() => {

    const handleResize = () => {

      setIsDesktop(window.innerWidth < 900);
    };

    handleResize();


    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
      console.log(handleResize);
    };
  }, []);



  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen)
  }



  return (
    <>
    
    
    {
        isDesktop ?
          //smallNavbar


          <div className='h-[4rem] p-5  w-[100vw] bg-white flex flex-row fixed top-0 left-0  items-center justify-between lg:px-[8rem] sm:px-[4rem] overflow-hidden z-30 '>


            <div className=" text-2xl font-bold mr-8  ">
              <h2 className='text-black' >
              Yummy <span className='text-red-600' >.</span>
              </h2>
            </div>
            
            <div className='font-medium flex items-center justify-between relative z-10 ' >
            <div className='mx-10' >
            {image ? (
                <Image
                  className=" w-[40px]  rounded-full border-gray-300 flex justify-center border-2 p-1  "
                  width={20}
                  height={20}
                  src={image}
                  alt={"avatar"}
                  onClick={()=>{router.push('/profile')}}
                />
              ):null}
            </div>
              <div  className=' flex-col justify-center items-center   lg:flex ' onClick={handleClick} >
                <span className={` bg-black/90 block transition-all duration-300 ease-out h-[2.5px] w-7 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} ></span>
                <span className={` bg-black/90 block transition-all duration-300 ease-out h-[2.5px] w-7  rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} ></span>
                <span className={` bg-black/90 block transition-all duration-300 ease-out h-[2.5px] w-7 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'} `} ></span>
              </div>
            </div>
            {
              isOpen ?
                <motion.div
                initial={{ translateX: '100%' }}
                animate={{ translateX: '0%' }}
                
                  transition={{ ease:"easeInOut",duration:0.5}}
                  className='min-w-[100vw]  flex flex-col h-[100vh] justify-between  fixed top-[10%]  
          bg-white/80 rounded-lg backdrop-blur-md py-0 shadow-lg' >
                  <nav className='py-8 px-6 lg:text-center sm:text-left z-10 w-[100%] mx-auto flex-col justify-center '>
                  <nav className='flex items-center justify-between  text-gray-500 font-semibold' >
                      { 
                          status==='authenticated' && (
                          <>
                            <Link href={'/profile'} className='whitespace-nowrap text-2xl font-bold flex items-center mt-1 ' >Hello, {userName} !</Link>
                            <button onClick={()=>signOut({callbackUrl:'/'}) } className=" border-white bg-primary  px-6 flex  items-center  justify-center py-2 w-[5.5rem] rounded-full text-white  mr-12 " > LogOut</button>
                          </>
                          )
                      }
                      {
                        status==='unauthenticated'&&(
                          <>
                          <Link href={'/login'} className=' ml-3' >Login</Link>
                    <Link href={'/register'} className=" bg-primary text-white px-6 mr-12 py-2 rounded-full  " > Register</Link>
                          </>
                        )
                      }
      

                    </nav>
                    <div className='my-8' >
                      <Link href='/' className="text-black/90  text-xl"  >Home</Link>
                    </div>
                    <div className='my-8' >
                      <Link href='/' className="text-black/90 text-xl" >About</Link>
                    </div>
                    <div className='my-8' >
                      <Link href='/' className="text-black/90 text-xl" >Menu</Link>
                    </div>
                    <div className='my-8' >
                      <Link href='/' className="text-black/90 text-xl" >Events</Link>
                    </div>
                     
                  </nav>
                  
                </motion.div>

                : null
            }

          </div>
          :
          //large Navbar
          <div className=' w-full  h-[4rem]  flex justify-evenly items-center  bg-white  fixed top-0 left-0  z-30
      '>
            <div className=" text-3xl font-bold mr-8  w-[18rem] lg:w-[8rem]  ">
              <h2 className='text-black' >
                Yummy<span className='text-red-600' >.</span>
              </h2>
            </div>
            <div className='flex'>
              <Link href={'/'} className='relative group text-base text-black/60 font-semibold hover:text-black mx-3 my-2 text-[14px]'>
                Home
                <span className=' h-[2px] inline-block w-0 bg-red-600 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-150' >
                  &nbsp;
                </span>

              </Link>
              <Link href={'/'} className='relative group text-base text-black/60 font-semibold hover:text-black mx-3 my-2 text-[14px]'>
                About
                <span className=' h-[2px] inline-block w-0 bg-red-600 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-150' >
                  &nbsp;
                </span>

              </Link>
              <Link href={'/'} className='relative group text-base text-black/60 font-semibold hover:text-black mx-3 my-2 text-[14px]'>
                Menu
                <span className=' h-[2px] inline-block w-0 bg-red-600 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-150' >
                  &nbsp;
                </span>

              </Link>
              <Link href={'/'} className='relative group text-base text-black/60 font-semibold hover:text-black mx-3 my-2 text-[14px]'>
                Events
                <span className=' h-[2px] inline-block w-0 bg-red-600 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-150' >
                  &nbsp;
                </span>

              </Link>
              <Link href={'/'} className='relative group text-base text-black/60 font-semibold hover:text-black mx-3 my-2 text-[14px]'>
                Chefs
                <span className=' h-[2px] inline-block w-0 bg-red-600 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-150' >
                  &nbsp;
                </span>

              </Link>
              <Link href={'/'} className='relative group text-base text-black/60 font-semibold hover:text-black mx-3 my-2 text-[14px]'>
                Gallery
                <span className=' h-[2px] inline-block w-0 bg-red-600 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-150' >
                  &nbsp;
                </span>

              </Link>
             
              <Link href={'/'}className='relative group text-base text-black/60 font-semibold hover:text-black my-2 text-[14px]'>
                Contact
                <span className=' h-[2px] inline-block w-0 bg-red-600 absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-150' >
                  &nbsp;
                </span>

              </Link>
             
            </div>
            {/* <div className='mx-4' >
            {image ? (
                
              ):(<Image
                className="  w-[35px] rounded-full border-gray-300 flex justify-center border-2 p-1   "
                width={150}
                height={150}
                src={user}
                
                alt={"avatar"}
              />)}
            </div> */}
             <nav className='flex items-center gap-4 px-4 text-gray-500 font-semibold' >
              
      { 
          status==='authenticated' && (
          <>
            <Link href={'/profile'} className='whitespace-nowrap' >Hello, {userName}</Link>
            <Image
                  className=" w-[40px] mx-2 rounded-full border-gray-300 flex justify-center border-2 p-1  "
                  width={20}
                  height={20}
                  src={image}
                  alt={"avatar"}
                  onClick={()=>{router.push('/profile')}}
                />
            <button onClick={()=>signOut({callbackUrl:'/'}) } className=" border-white bg-primary  px-8 py-2 rounded-full text-white " > LogOut</button>
          </>
          )
      }
      {
        status==='unauthenticated'&&(
          <>
          <Link href={'/login'} className=' ' >Login</Link>
    <Link href={'/register'} className=" bg-primary text-white px-8 py-2 rounded-full " > Register</Link>
          </>
        )
      }
      

    </nav>

          </div>
      }
   

    </>
  )
}

export default Navbar