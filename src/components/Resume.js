import React from 'react'
import ResumeImg from '../assets/updated-resume.svg'
import Resumepdf from '../assets/Gokilavani_P(Resume).pdf'

const Resume = () => {

    return (
    <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5 py-20' >
        <div className='md:w-1/2 py-5 flex justify-center md:justify-end'>
            <img className='w-[300px] ' src={ResumeImg} alt='ResumeImg' />
        </div>

        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col text-white justify-center '>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold'> Resume </h1>
                <p className='pb-5' > You can view my resume  <a className='btn' href={Resumepdf}> Download</a> </p>
            </div>
        </div>


    </section>


  )
}

export default Resume
