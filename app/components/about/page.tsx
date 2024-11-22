import Image from 'next/image'


const About = () => {
  return (
<main id='aboutsection' className='bg-aboutColor py-6 md:py-10 xl:py-20 xl:px-10'>
    <div className='h-fit md:h-[600px] xl:h-[600px] flex flex-col md:flex-row w-[95%] lg:w-[90%] justify-between items-center text-gray-100 mx-auto'>
      <h3 className='md:hidden text-3xl items-center mb-10 font-serif font-bold text-purple-900'>
        ABOUT ME
      </h3>
      <div className='w-[300px] sm:w-[350px] md:w-[360px] md:h-[400px] lg:w-[450px] lg:h-[500px] bg-white rounded-xl '>
        <Image src={"/about.jpg"} alt='about-image' width={500} height={400} className='object-cover w-[280px] sm:w-[350px] md:w-[360px] md:h-[400px] lg:w-[450px] lg:h-[500px] h-[250px] rounded-3xl mx-auto' />
      </div>
      <div className='w-[95%] md:w-[55%] lg:w-[50%] mx-auto'>
        <h3 className='hidden md:text-2xl lg:text-2xl xl:text-3xl md:inline-block items-center mb-4 mt-10 font-semibold text-purple-900 font-serif'>
          ABOUT ME
        </h3>
        <h2 className='font-medium text-4xl lg:text-5xl xl:text-5xl mt-10 mb-6 md:mt-1 md:mb-4 font-sans text-gray-500 '>A Creative Web Developer</h2>
    <p className='xl:text-xl sm:text-lg text-black'>Hi! I am Sunaina, a creative developer passionate about blending the art of design with the power of code. I specialize in building visually striking, user-friendly experiences that not only look great but also work seamlessly across platforms. 
</p><br />
<p className='xl:text-xl sm:text-lg text-black'>
I am always excited to collaborate with like-minded innovators and take on new challenges that push my skills to the next level. When I am not coding, I am exploring new ways to think about creativities. I find inspiration everywhere, from everyday life to digital art, and love translating those ideas into the work.</p>

      </div>
    </div>
  </main>

  )
}



export default About