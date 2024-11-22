import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <main id='projectsection' className='py-16 items-center justify-evenly md:justify-between h-fit px-8 md:px-10 lg:px-20 text-center'>

            <div className='w-[90%] md:w-[55%] lg:w-[50%] mx-auto'>
            <h2 className=' hidden text-purple-900 font-semibold text-2xl md:text-2xl lg:text-2xl xl:text-3xl md:inline-block items-center mb-4 font-serif'>
                Projects
                </h2>
                <h2  className=' md:hidden text-purple-900 font-semibold text-2xl md:text-2xl lg:text-2xl xl:text-3xl  items-center mb-2 font-serif'> Projects</h2>
                <p className='font-sans font-semibold text-xl md:text-xl lg:text-xl xl:text-xl'>A glimpse into the projects I have worked on.</p>
                </div>
          
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-2xl px-5 py-5 gap-y-16 gap-x-7">
  
  {/* Project 1 */}
  <div className="relative group items-center">
    <Image
      src="/pureplates.PNG"
      alt="project1"
      width={700}
      height={300}
      className="rounded-md w-[400px] sm:w-[450px] md:w-[500px] xl:w-[700px] h-[200px] xl:h-[300px] transition-opacity duration-300"
    />
    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-white font-bold font-serif text-xl">Pure Plates</span>
    </div>
  </div>

  {/* Project 2 */}
  <div className="relative group items-center">
    <Image
      src="/resume.PNG"
      alt="project2"
      width={700}
      height={300}
      className="rounded-md w-[400px] sm:w-[450px] md:w-[500px] xl:w-[700px] h-[200px] xl:h-[300px] border-2 border-purple-900 transition-opacity duration-300"
    />
    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-white font-bold font-serif text-xl">Resume</span>
    </div>
  </div>

  {/* Project 3 */}
  <div className="relative group items-center">
    <Image
      src="/pureplates.PNG"
      alt="project3"
      width={700}
      height={300}
      className="rounded-md w-[400px] sm:w-[450px] md:w-[500px] xl:w-[700px] h-[200px] xl:h-[300px] transition-opacity duration-300"
    />
    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-white font-bold font-serif text-xl">Pure Plates</span>
    </div>
  </div>

</div>

    
    </main>
  )
}

export default Projects