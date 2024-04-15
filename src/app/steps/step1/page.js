"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import Link from "next/link";
import SmallNavbar from "@/app/components/SmallNavbar";
import Loader from "@/app/components/LoaderComponent/Loader";


const ProfilePage = () => {
  const router = useRouter();
  const session = useSession();
  const [userName, setuserName] = useState(" ");

  const [phone, setPhone] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const { status,update } = session;

  const [profileFetched,setProfileFetched] = useState(false);
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
        
          setProfileFetched(true);
        });
      });
    }
  }, [status, session]);
  console.log(session);

  async function handleProfileInfoUpdate(ev) {
    ev.preventDefault();
    update({name: userName});
    
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: userName,

          streetAddress,
          phone,
          postalCode,
          city,
          country,
        }),
      });
      if (response.ok) {resolve();
        router.push("/steps/step2");
        
      
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
      <SmallNavbar/>
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
    <SmallNavbar/>
    <section className="mt-24">


<div className="max-w-sm mx-auto mt-24 mb-16   ">
<h1 className='text-center text-primary text-4xl mb-4 ' >
      Enter Your Details
      </h1>
  <div className="flex gap-4 mx-16 ">
    
    <form className="grow" onSubmit={handleProfileInfoUpdate}>
      <label>First and Last Name</label>
      <input
      required
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
        required
        value={phone}
        onChange={(ev) => setPhone(ev.target.value)}
      />

      <label>Street Address</label>
      <input
        type="text"
        required
        placeholder="Street Address"
        value={streetAddress}
        onChange={(ev) => setStreetAddress(ev.target.value)}
      />

      <div className="flex gap-2">
        <div>
          <label>City</label>
          <input
          required
            type="text"
            placeholder="City"
            value={city}
            onChange={(ev) => setCity(ev.target.value)}
          />
        </div>
        <div>
          <label>PostalCode</label>
          <input
          required
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
        required
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
