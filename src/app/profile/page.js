"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ImageSelector from '../components/ImageSelector';
import toast from "react-hot-toast";
import Link from "next/link";
import user from  "../../../public/user.svg";
import  Navbar  from "../components/Navbar";
import Loader from "../components/LoaderComponent/Loader";



const ProfilePage = () => {
  const router = useRouter();
  const session = useSession();
  const [userName, setuserName] = useState(" ");
  const [image, setImage] = useState('');
  const [phone, setPhone] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const { status,update } = session;
  const [profileFetched,setProfileFetched] = useState(false);

  const images = [
    { id: 1, src: '/avatars/avatar1.jpg', alt: 'Image 1' },
    { id: 2, src: '/avatars/avatar2.jpg', alt: 'Image 2' },
    { id: 3, src: '/avatars/avatar3.jpg', alt: 'Image 3' },
    { id: 4, src: '/avatars/avatar4.jpg', alt: 'Image 4'},
    { id: 1, src: '/avatars/avatar5.jpg', alt: 'Image 5' },
   
    
    { id: 4, src: '/avatars/avatar8.jpg', alt: 'Image 8'},
  ];

  useEffect(() => {
    if (status === "authenticated") {
      setuserName(session.data.user.name);
      
      fetch("/api/profile").then((response) => {
        response.json().then((data) => {
          setPhone(data.phone);
          setStreetAddress(data.streetAddress);
          setCity(data.city);
          setPostalCode(data.postalCode);
          setCountry(data.country);
          setImage(data.image);
          setProfileFetched(true);
        });
      });
    }
  }, [status, session]);


  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();
    update({name: userName});
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: userName,
          image,
          streetAddress,
          phone,
          postalCode,
          city,
          country,
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
 

  if (status === "loading" ||!profileFetched ) {
    return (<>
    <Navbar/>
    <div>
     <span>
    <Loader/>
     </span>
    </div>
    </>);
  }
  if (status === "unauthenticated") {
    return redirect("/login");
  }
  

  return (
    <>
  <Navbar/>
    <section className="mt-24 h-full mb-16">
    <h1 className='text-center text-primary text-4xl mb-4 ' >
        Your Profile
      </h1>

<div className="max-w-sm mx-auto mt-8  ">
  <div className="lg:flex gap-4 md:flex-col mx-16  lg:mx-0 ">
  <div className='block   max-w-xs mx-auto' >
{image ? (
          <Image
            className=" w-[200px] rounded-full border-gray-200 border-4 p-1 mx-auto mb-1"
            width={150}
            height={150}
            src={image}
            alt={"avatar"}
          />
        ):(<Image
          className="  w-[150px] rounded-full border-gray-200 border-4 p-1  mx-auto mb-1"
          width={150}
          height={150}
          src={user}
          alt={"avatar"}
        />)}
<ImageSelector className="" images={images} onSelect={(image)=>{setImage(image.src)}} />


</div>
  
    <form className="grow mt-8" onSubmit={handleProfileInfoUpdate}>
      <label>First and Last Name</label>
      <input
        type="text"
        placeholder="First and Last Name"
        value={userName}
        onChange={(ev) => setuserName(ev.target.value)}
      />

      <label>Email</label>
      <input type="email" value={session.data.user.email} disabled />

      <label>Phone Number</label>
      <input
        type="tel"
        placeholder="Phone Number"
        minLength={10}
        maxLength={10}
        value={phone}
        onChange={(ev) => setPhone(ev.target.value)}
      />

      <label>Street Address</label>
      <input
        type="text"
        placeholder="Street Address"
        value={streetAddress}
        onChange={(ev) => setStreetAddress(ev.target.value)}
      />

      <div className="flex gap-2">
        <div>
          <label>City</label>
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(ev) => setCity(ev.target.value)}
          />
        </div>
        <div>
          <label>PostalCode</label>
          <input
            type="text"
            placeholder="Postal Code"
            value={postalCode}
            onChange={(ev) => setPostalCode(ev.target.value)}
          />
        </div>
      </div>

      <label>Country</label>
      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(ev) => setCountry(ev.target.value)}
      />
      

      <button type="submit">Save</button>
    </form>
  </div>
</div>
</section>
    </>
  );
};

export default ProfilePage;
