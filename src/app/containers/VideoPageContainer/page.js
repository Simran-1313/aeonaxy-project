"use client";
import React from 'react'
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ReactPlayer = dynamic(() => import('react-player'), {
    ssr: false
});

const VideoPageContainer = () => {
    return (
        <>
            <main className='relative h-screen w-full bg-black  '>
                <Link href={"/"}>
                    <div className=' absolute top-5 right-5 hover:cursor-pointer '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    </div>
                </Link>
                <div className=' h-[100vh] w-[100vw] border-2 border-white  grid place-content-center'>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=eZSLXNXPPbc'
                        style={{ width: '100vw', height: '100vh' }}
                        playing={true} // Set this prop to true for autoplay
                        controls={true} // Show video controls
                        config={{
                            youtube: {
                                playerVars: {
                                    modestbranding: 1,
                                    rel: 0,
                                },
                            },
                        }}
                    />
                </div>
            </main>I
        </>

    )
}

export default VideoPageContainer