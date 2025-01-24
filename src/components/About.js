import React from 'react'
import AboutImg from '../assets/aboutme.svg'

const About = () => {
  
  const config =
  {
    line1:'Proficient in developing full-stack web applications using MongoDB, Express.js, React, and Node.js.',
    line2:'Experienced in creating dynamic and responsive user interfaces with React.',
    line3:'Adept at implementing scalable, secure, and optimized solutions for real-world projects.',
    line4:'Passionate about leveraging MERN technologies to deliver seamless user experiences.'
  }

  const prgmlan = ["JavaScript(ES6+)"]
  const frontend= ["React.js, HTML5", "CSS3, Tailwind CSS"]
  const backend= [" Node.js", "Express.js"];
  const db=["MongoDB"]
  const  verctrl =["Git, GitHub"]
  const devtool =["Visual Studio Code"]
  const deploytool = ["Netlify"]
  const other = ["JSON, Agile Methodology"]


  return (
    <section id='about' className='flex flex-col md:flex-row bg-secondary px-5 py-20 '>
        <div className=' md:w-1/2  py-5 flex justify-center md:justify-end'>
            <img className='h-[450px] w-[450px] ' src={AboutImg} />
        </div>

        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col text-white justify-center'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'> About me</h1>
                <p className='pb-3'>{config.line1} </p>
                <p className='pb-3'> {config.line2}</p>
                <p className='pb-3'> {config.line3}</p>
               

                <h2 className='text-4xl border-b-4 border-primary mb-5 w-[90px] font-bold'> Skills </h2>

                <div   className='md:-1/2 flex flex-col md:flex-row gap-10' >
                  <div> 
                    <div className='pb-3'>
                      <h5 className='font-bold '>Front-End Technologies: </h5>
                      <ul style={{listStyleType:"disc", marginLeft:"30px"}}>
                        {frontend.map((item,index)=> (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  
                  
                    <div className='pb-3'>
                      <h5 className='font-bold'>Programming Language: </h5>
                      <ul style={{listStyleType:"disc", marginLeft:"30px"}}>
                        {prgmlan.map((item,index)=> (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>  
                    </div>                            
                      
                    <div className='pb-3'>
                      <h5 className='font-bold'>Version Control</h5>
                      <ul style={{listStyleType:"disc", marginLeft:"30px"}}>
                        {verctrl.map((item,index)=> (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className='pb-3'>
                      <h5 className='font-bold'>Database: </h5>
                      <ul style={{listStyleType:"disc", marginLeft:"30px"}}>
                        {db.map((item,index)=> (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>


                  <div >
                        
                    <div className='pb-3'>
                      <h5 className='font-bold'>Back-End Technologies: </h5>
                      <ul style={{listStyleType:"disc", marginLeft:"30px"}}>
                        {backend.map((item,index)=> (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    

                    <div className='pb-3'>
                      <h5 className='font-bold'>Development Tool:  </h5>
                      <ul style={{listStyleType:"disc", marginLeft:"30px"}}>
                        {devtool.map((item,index)=> (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  
                
                    <div className='pb-3'>
                      <h5 className='font-bold'>Deployment Platforms: </h5>
                      <ul style={{listStyleType:"disc", marginLeft:"30px"}}>
                        {deploytool.map((item,index)=> (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    

                    <div className='pb-3'>
                      <h5 className='font-bold'>Other Skills: </h5>
                      <ul style={{listStyleType:"disc", marginLeft:"30px"}}>
                        {other.map((item,index)=> (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                  </div>
          
                </div>
                
                  
                

                
            </div>
        </div>


    </section>

  )
}

export default About



