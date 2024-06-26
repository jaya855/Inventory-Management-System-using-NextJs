'use client'
import React from 'react'
import { useRouter } from 'next/navigation'; 
import deleteCookie from 'cookies-next'
// import Cookies from 'js-cookie';

import 'bootstrap/dist/css/bootstrap.min.css';


const HeroSection = () => {
  const router = useRouter()
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;    
  const handleSubmit=()=>{
    router.push('/login');
   
  }

 
  const handleLogout = () => {
    localStorage.setItem("token", "");
    // Cookies.remove('authToken', { path: '/' });
    // const expirationDate = new Date(0);
    // document.cookie = `authToken=; expires=${expirationDate.toUTCString()}; path=/`;
    // deleteCookie('authToken', {
    //   path: '/',
    //   expiresIn: "1d",
    //   httpOnly: true,
    // });

    router.push('/login'); // Redirecting to login after logout
  };
  return (
    <div className='h-[53rem] w-full flex flex-col justify-center items-center  bg-[#EADBC8] text-center font-semibold text-[2rem] text-rose-950'>
        <div className='mt-[-150px]'>
           
      Connect with us and keep tracking your stocks
      <br/>
      we make your life easier
      <br/>
      </div>
      <div>{
        token ?(
      <button type="button" className="text-rose-950 hover:text-white border-2 border-rose-950 hover:bg-rose-950 focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold rounded-lg text-[1rem] px-4 py-2 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
       onClick={handleLogout}>Logout</button>
      )
       :(<button type="button" className="text-rose-950 hover:text-white border-2 border-rose-950 hover:bg-rose-950 focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold rounded-lg text-[1rem] px-4 py-2 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
       onClick={handleSubmit}>Login</button>)
      }
     </div>
      
    </div>
  )
}

export default HeroSection
