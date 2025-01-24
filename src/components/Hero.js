import React from 'react'
import MernImg from '../assets/mern1.webp'
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Hero = () => {
  const config={
    subtitle: "Dedicated MERN Stack Developer creating efficient and seamless web applications with modern technologies.",
    social:{
      linkedin:'https://www.linkedin.com/in/gokilavani-p-010835203',
      github:'https://github.com/Vani201',
      facebook:'https://www.linkedin.com/in/gokilavani-p-010835203'
    }
  }

  return (
    <section id='hero' className='flex flex-col md:flex-row px-10 py-15 pt-20 bg-primary justify-center'>
        <div className=' flex flex-col'>
          <h1 className=' text-white text-6xl font-hero-font'> Hi, I'm Gokilavani  <br /> <br />
          <p className='text-4xl'> {config.subtitle} </p>
          </h1>

          <div className='w-1/2 flex flex-row py-10'>
            <a href={config.social.linkedin} className='pr-5 hover:text-white'> <AiOutlineLinkedin size={40}/> </a>
            <a href={config.social.github} className='pr-5  hover:text-white'> <AiOutlineGithub size={40}/> </a>
          
          </div>

        </div>

        <img className='md:w-1/2  h-[300px] w-[500px]' src={MernImg} alt='HeroImg'/>
       {/*  <img className='md:w-1/3' src={HeroImg} /> */}
    </section>
  )
}

export default Hero





























