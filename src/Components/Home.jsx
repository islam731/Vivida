import React from 'react'
import Background from './Background'
import Navbar from './Navbar'

function Home() {
  return (
    <>
    <div class=" w-full overflow-hidden h-[39rem] md:h-[45rem]">
    <Background class=" absolute invisible md:visible" video="../../Home-Page-Banner.mp4" black="../../black.webp" class2="invisible md:visible absolute w-full overflow-hidden opacity-70"/>
    <Background class="absolute visible md:invisible" video="../../Home-Page-Banner2.mp4" black="../../black2.webp.jpg" class2="visible md:invisible absolute w-full overflow-hidden opacity-70 "/>
     <Navbar/>
     <div class=" w-full overflow-hidden h-40 text-white md:translate-y-80 translate-y-52 translate-x-3">
     <h1 class="text-4xl pr-4 md:text-white md:text-7xl text-center ">Your Trusted Hospitality Partner<br/>in the GCC!</h1>
    </div>
    </div>    
    </>
  )
}

export default Home