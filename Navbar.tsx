"use client";
import React, { use, useEffect, useState } from 'react'
import Link from 'next/link';


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    function getMenuClasses(){
        let menuClasses = [];

        if(isOpen){
           menuClasses = [
            "flex",
            "flex-col",
            "text-end",
            "absolute",
            "top-[60px]",
            "bg-gray-800",
            "w-full",
            "p-4",
            "left-0",
            "gap-10",
           ];
        }else{
          menuClasses.push("hidden", "md:flex");  
        }

        return menuClasses.join(" ");
    }

  return (
    <>
    <nav className='bg-gray-800 text-white p-4 sm:p-4 md:flex md:justify-between md:items-center'>
        <div className="container mx-auto flex justify-between items-center">
            <a href="" className="text-2xl font-bold">
                My Logo
            </a>
            <div className={getMenuClasses() }>
                <Link rel="stylesheet" href="/" className='mx-2 hover:text-gray-300'>
                Home
                </Link>
                <Link rel="stylesheet" href="/about" className='mx-2 hover:text-gray-300'>
                About
                </Link>
                <Link rel="stylesheet" href="/contact" className='mx-2 hover:text-gray-300'>
                Contact
                </Link>
            </div>
            <div className="md:hidden flex items-center">
                
                <button 
                onClick={() => {
                    setIsOpen(!isOpen);
                    }}
                    >
                  <svg className='w-6 h-6'  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                </button>
            </div>
        </div>

    </nav>
   
    </>
  )
}

export default Navbar
