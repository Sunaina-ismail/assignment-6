'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'



const Header = () => {

    const[isDropDownOpen, setIsDropdownOpen] = useState(false)

    const ToggleDropdown = (()=>{
        setIsDropdownOpen (!isDropDownOpen)
    });

    const closeDropdown = () => {
        setIsDropdownOpen(false)
    };
  return (
    <header className='relative bg-white w-full px-3 py-2 lg:p-3 lg:px-16 md:p-5 md:px-6 text-purple-900 border flex justify-between items-center'>
        <div className='flex items-center text-2xl md:text-3xl lg:text-4xl font-sans '><span className= 'font-bold mr-2' >SUNAINA</span>  ISMAIL</div>
        <ul className='text-xl xl:text-xl md:text-md hidden md:w-[50%] xl:w-[40%] md:flex justify-between font-semibold'>

        <li className='hover:text-purple-500 hover:border-b-2 hover:border-purple-500 '>Home</li>
        <li className='hover:text-purple-500 hover:border-b-2 hover:border-purple-500'>About</li>
        <li  className='hover:text-purple-500 hover:border-b-2 hover:border-purple-500'>Skills</li>
        <li className='hover:text-purple-500 hover:border-b-2 hover:border-purple-500'>Projects</li>
        <li className='hover:text-purple-500 hover:border-b-2 hover:border-purple-500'>Contact</li>
        </ul>

        {isDropDownOpen &&(
            <div className='absolute top-full left-0 w-full bg-white shadow-md z-10 md:hidden'>
                <ul className='flex flex-col items-center space-y-4 py-4'>
               <li className=' hover:border-b-2  text-lg text-purple-700'><Link href="/" onClick={closeDropdown}>Home</Link></li>
               <li className=' hover:border-b-2  text-lg text-purple-700'><Link href="/" onClick={closeDropdown}>About</Link></li>
               <li className=' hover:border-b-2  text-lg text-purple-700'><Link href="/" onClick={closeDropdown}>Skills</Link></li>
               <li className=' hover:border-b-2  text-lg text-purple-700'><Link href="/" onClick={closeDropdown}>Projects</Link></li>
               <li className=' hover:border-b-2  text-lg text-purple-700'><Link href="/" onClick={closeDropdown}>Contact</Link></li>
            
               
                </ul>
            </div>
        )}
        <span className='md:hidden text-2xl'><FaBars onClick={ToggleDropdown}/></span>
        </header>
  )
}

export default Header