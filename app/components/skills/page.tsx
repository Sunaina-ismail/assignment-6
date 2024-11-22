import Image from 'next/image'

const Skills = () => {
  return (
    <main id='Skillsection' className='py-16 items-center justify-evenly md:justify-between bg-darkPurple h-fit px-8 md:px-50 lg:px-60 text-center'>
    
            <div className='w-[90%] md:w-[55%] lg:w-[50%] mx-auto'>
            <h2 className=' hidden text-white font-semibold text-2xl md:text-2xl lg:text-2xl xl:text-3xl md:inline-block items-center mb-4 border-b-2 font-serif border-white'>
                Skills
                </h2>
                </div>
                    <h2  className=' md:hidden text-white font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-3xl  items-center mb-2 font-serif'> Skills</h2>
                    <br />
                <br />

                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-[94%] bg-purple-800 text-2xl px-5 py-5 gap-y-16'>
                    <div className='flex flex-col items-center'>
                        <Image src={'/typescript-skill.png'} alt="ts-Skill" width={200} height={200} className='rounded-3xl '></Image>
                        <span className='font-semibold font-serif mt-10'>Typescript</span>
                        </div>
                        <div className='flex flex-col items-center'>
                        <Image src={'/react-logo1.png'} alt="react" width={200} height={200} className='rounded-3xl '></Image>
                        <span className='font-semibold font-serif mt-10'>React</span>
                        </div>
                       <div className='flex flex-col items-center'>
                         <Image src={'/logo.png'} alt="nxt" width={180} height={100} className='rounded-3xl '></Image>
                         <span className='font-semibold font-serif mt-10 '>Next.js</span>
                       </div>
                       <div className='flex flex-col items-center'>
                        <Image src={'/figma.png'} alt="figma" width={200} height={200} className='rounded-3xl '></Image>
                        <span className='font-semibold font-serif mt-10'>Figma</span>
                        </div>
                        <div className='flex flex-col items-center'>
                        <Image src={'/tailwind1.jpg'} alt="css" width={200} height={200} className='rounded-3xl '></Image>
                        <span className='font-semibold font-serif mt-10'>Tailwind-CSS</span>
                        </div>
                       <div className='flex flex-col items-center'>
                         <Image src={'/html5.png'} alt="html" width={200} height={200} className='rounded-3xl '></Image>
                         <span className='font-semibold font-serif mt-10 '>HTML 5</span>
                       </div>
                    </div>
            
    
    </main>
  )
}

export default Skills