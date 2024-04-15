'use client'
import React from 'react'
import Image from 'next/image';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import SmallNavbar from '../components/SmallNavbar';

const LoginPage = () => {

    const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [ loginInProgress,setloginInProgress ] = useState(false);

  async function handleFormSubmit(e){
    e.preventDefault();
    setloginInProgress(true);
    
    await signIn('credentials',{email,password,callbackUrl:'/'});
    console.log("Signed in");
    setloginInProgress(false);
  }

  return (
    <>
    <SmallNavbar/>
    <section className='mt-16 h-[70vh]' >
        <h1 className='text-center text-primary text-4xl mb-4 ' >
        Login
      </h1>
      <form className='max-w-xs mx-auto' onSubmit={handleFormSubmit}  >
      <input type='email' placeholder='email' name='email' required value={email}
          disabled={loginInProgress}
        onChange={(e)=>{
          setEmail(e.target.value);

        }}  />
        <input  type="password" name='password' required placeholder='password' value={password}
          disabled={loginInProgress}
        onChange={(e)=>{
          setPassword(e.target.value);
        }} />
        <button type='submit' disabled={loginInProgress} >Login</button>
        {/* <div className='my-4 text-center text-gray-500' >
        or login with provider
        </div>
        <button type='button' onClick={()=> signIn('google',{callbackUrl:'/profile'})} className='flex gap-4 justify-center ' >
          <Image src='/google.png' alt='' width={24} height={24} /> Login with google</button> */}

      </form>
    </section>
    </>
  )
}

export default LoginPage