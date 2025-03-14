import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div id='hero' className="min-h-screen bg-no-repeat bg-[url(/banner_bg.jpg)]  bg-cover" style={{backgroundSize: '35%', backgroundPosition: "left 100px top 150px"}}>
    
    
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p data-aos="fade-up">I'm</p>
            <p data-aos="fade-up">Anas</p>
            <p data-aos="fade-up">Shakil</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
