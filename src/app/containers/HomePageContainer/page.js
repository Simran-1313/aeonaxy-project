
"use client";
import React from 'react'
import paneer from '../../../../public/home.png'
import Image from 'next/image'
import Loader from '@/app/components/LoaderComponent/Loader';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/app/components/Navbar';

const HomePageContainer = () => {

    const [loader, setloader] = useState(true);
    const [buttonAnimations, setButtonAnimations] = useState(false);

    setTimeout(() => {
        setloader(false);
    }, 500);

    return (
        <>
            {
                loader ? <Loader /> :
                    <>
                        <section>
                            <Navbar />
                        </section>
                        <main className=' bg-[#EEEEEE] w-full  md:px-20 px-5 md:flex md:flex-row-reverse md:items-center  md:justify-center min-h-screen ' id='home'>
                            {/* <div className='md:flex md:flex-row-reverse '> */}
                                <div>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 1.2 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 1,
                                            ease: 'easeInOut'
                                        }}
                                        onAnimationComplete={() => setButtonAnimations(true)}
                                        viewport={{ once: true }}
                                        className='md:pb-10 mt-10 md:mt-0'
                                    >
                                        <Image
                                            src={paneer}
                                            height={580}
                                            width={580}
                                            className=' md:pt-28  pt-16'
                                            quality={100}
                                            alt='Image not avaible'
                                        />
                                    </motion.div>
                                </div>
                                <div className='md:flex md:flex-col'>
                                    <motion.div
                                        initial={{ y: 100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{
                                            duration: 1,
                                            ease: 'easeInOut'
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        <div className='flex flex-col items-center justify-center   md:items-start  pt-16 tb-5'>
                                            <p className='text-2xl font-bold md:text-4xl'>Enjoy Your Healthy</p>
                                            <p className='text-2xl font-bold md:text-4xl'>Delicious Food</p>
                                        </div>
                                        <div className='p-5 md:pl-0  md:w-[70%] md:my-2 md:mr-20 md:py-4 md:text-gray-500  md:text-[12px] text-center md:text-left'>
                                            Elevate your dining experience with us at Yummy.  Where every dish tells a story of passion and perfection.you will love it and repeat it.
                                        </div>
                                    </motion.div>

                                    {
                                        buttonAnimations && <>
                                            <motion.div
                                                initial={{ y: 100, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                transition={{
                                                    duration: 1,
                                                    ease: 'easeInOut'
                                                }}
                                                viewport={{ once: true }}
                                            >
                                                <div className='flex justify-evenly md:justify-start items-center mt-9 md:mt-2 pb-10'>
                                                    <div className='border bg-red-700 shadow hover:shadow-2xl hover:cursor-pointer hover:bg-red-600 px-4 text-white rounded-3xl py-2'>Book a Table</div>
                                                    <div className='flex items-center '>
                                                        <span className='px-2'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="red" class="bi bi-play-circle" viewBox="0 0 16 16">
                                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                                                            </svg>
                                                        </span>
                                                        <span className='text-xl'>
                                                            Watch video
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>

                                        </>
                                    }
                                </div>
                            {/* </div> */}
                        </main>
                    </>
            }

        </>
    )
}

export default HomePageContainer;