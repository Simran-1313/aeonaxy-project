'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { signIn } from 'next-auth/react'
import Navbar from '../components/Navbar';

const Registerpage = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false)
  const[userCreated, setUserCreated]=useState(false);
  const[error, setError] = useState(false);
  
  // Function to handle the form submission of register page.
  async function handleFormSubmit(e){
    e.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);

    const response=  await fetch('/api/register',{
        method:'POST',
        body:JSON.stringify({email,password}),
        headers:{'Content-Type':'application/json'},
      });
      
      if(response.ok){
      
        setUserCreated(true);
       }
      else{
        setError(true);
      }
     
     setCreatingUser(false);
      
   
      
    

    
    
  }
  return (
   <>
   <Navbar/>
    <section className='mt-24 h-[70vh]' >
      <h1 className='text-center text-primary text-4xl mb-4 ' >
        Register
      </h1>
      {userCreated && (
        <div className='my-4 text-center' >
          User created.<br/> Now you can {' '} <Link href={'/steps/login'} className='underline' >Login &raquo;</Link>
        </div>
      )}
      {
        error && (
          <div className='my-4 text-center' >
                An error has occured.<br/>
                Please try again Later...
          </div>
        )
      }
      <form className='block max-w-xs mx-auto' onSubmit={handleFormSubmit} >
        <input type='email' placeholder='email' required value={email}
          disabled={creatingUser}
        onChange={(e)=>{
          setEmail(e.target.value);

        }}  />
        <input  type="password" required placeholder='password' value={password}
          disabled={creatingUser}
        onChange={(e)=>{
          setPassword(e.target.value);
        }} />
        <button type='submit' disabled={creatingUser} > Register</button>
        
      </form>
      
    </section>
   </>
  )
}

export default Registerpage