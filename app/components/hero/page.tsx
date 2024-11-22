import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <main className="flex flex-col md:flex-row items-center justify-evenly md:justify-between bg-darkPurple h-[650px] px-4 py-6 md:px-10 lg:px-20">
    <div className="md:hidden px-6 flex items-center mr-7" >
      <Image
        src={"/home.jpg"}
        width={300}
        height={400}
        className="object-cover rounded-lg"
        alt="Hero-image"
  
      />
    </div>
    <div className="px-6 sm:w-[80%] md:w-[50%] lg:w-[50%] mx-auto">
      <div className="text-5xl md:text-6xl lg:text-7xl text-white font-cookie">
        <span className="text-3xl font-cookie">I&apos;m {" "}</span>  
        <span className="text-black font-bold font-serif text-3xl md:text-4xl lg:text-5xl">
        Sunaina Ismail
        </span>{" "}
        <br />
         <span className='text-3xl font-cookie'>a</span>{" "}
        <span className="text-black font-bold font-serif text-3xl md:text-4xl lg:text-4xl">
          Frontend Developer.
        </span>
        
      </div>
      <div className="xl:w-[60%] flex justify-evenly py-6 px-2 sm:py-8 ">
        {" "}
        <Link href="https://static-resume-gold-three.vercel.app/">
     <Button className=" font-semibold bg-white text-purple-900  px-3 py-5 md:px-4 md:py-6 lg:px-4 lg:py-6 text-md lg:text-xl sm:text-xl hover:bg-purple-500  hover:text-white rounded-md mr-4">
       View CV
        </Button>
        </Link> {" "} 
        <Link href={"https://www.linkedin.com/in/sunaina-ismail-7bb965334"}>
         <Button className=" font-semibold bg-transparent  px-4  py-5 md:px-4 md:py-6 lg:px-4 lg:py-6 text-md lg:text-xl sm:text-xl rounded-sm hover:shadow-md bg-purple-900 hover:bg-white hover:text-purple-600">
         Connect
        </Button> </Link> 
      </div>
    </div>
    <div className='hidden md:block md:w-[45%] className="object-cover '>
      <Image
        src={"/home.jpg"}
        width={350}
        height={300}
        alt="Hero-image"
        className='rounded-lg'
      />
    </div>
  </main>
  )
}

export default Hero