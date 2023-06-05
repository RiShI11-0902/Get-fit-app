import React from 'react'
import { fb, insta, tweet } from '../assets'

const Footer = () => {
  return (
    <div>
        <footer class="p-3 mt-5 bg-gradient-to-b from-[#ffffff] to-gray-300">
        <div class="2xl:flex 2xl:justify-between md:flex md:justify-between">
        <div class="box1">
            <div class="logo"></div>
            <p class="mt-2 text- text-xl text-center font-bold">We prioritize creating a welcoming and inclusive environment. We believe that everyone deserves to feel comfortable and supported in their fitness journey. Our friendly staff and vibrant community are here to cheer you on, celebrate your achievements, and provide the motivation you need to stay on track.</p>
            <div class="underline mt-3">AND MORE</div>
            <p className='flex items-center space-x-5 mt-5'> <br /> <img className='w-10' src={fb} alt="" /><img className='w-10' src={insta} alt="" />
                          <img className='w-10' src={tweet} alt="" /></p>
        </div>
        
    </div>
    <div class="icons mt-3 flex space-x-4 items-center mx-auto w-fit">
        
    </div>
        <h2 class="text-stone-900 font-bold text-xs mt-3">© 2004-2022 getfiit.in - India's # 1 GYM.</h2>
        <h2 class="text-stone-900 font-bold text-xs mt-3">GET FIIT.</h2>
    </footer>
    </div>
  )
}

export default Footer