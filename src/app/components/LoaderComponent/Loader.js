"use client";
import React from 'react'
import Styles from './Loader.module.css'

const Loader = () => {
    return (
        <>
            <div className='h-screen grid place-content-center bg-gray-200 '>
                <div className={`${Styles.loader} `}></div>
            </div>
        </>
    )
}

export default Loader