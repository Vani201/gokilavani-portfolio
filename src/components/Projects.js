import React from 'react'
import WebsiteImg1 from  '../assets/todolist.png'
import WebsiteImg2 from '../assets/socialmedia.jpeg'
import WebsiteImg3 from  '../assets/joke.jpg' 
import WebsiteImg4 from  '../assets/bmi.jpg' 
import WebsiteImg5 from  '../assets/colorapp.png' 
import WebsiteImg6 from '../assets/calculator.png' 
import WebsiteImg7 from '../assets/bookapp.jpg'
 



const Projects = () => {

    const config1={
        projects1: [
            
            {
                image: WebsiteImg1,
                description:"A simple and efficient React JS To-Do List app to add, edit, and manage tasks with a clean UI for better productivity.",
                link: 'https://gokilavani-todolist-react.netlify.app/',
                gitlink:'https://github.com/Vani201/todolist_react'
            },
            {
                image: WebsiteImg2,
                description:"A dynamic React JS social media app for connecting, sharing, and engaging with friends through posts, comments, and likes in real time.",
                link: 'https://react-social-media-project.netlify.app/',
                gitlink:'https://github.com/Vani201/social_media'
            },
            {
                image: WebsiteImg3,
                description:"A fun React JS joke generator app that delivers random jokes instantly to keep you entertained and laughing." ,
                link: 'https://react-joke-generator-project.netlify.app/',
                gitlink:'https://github.com/Vani201/JokeGenerator'
            }            
           
    
        ]
    }

    const config2={
        projects2: [
            {
                image: WebsiteImg4,
                description:"A simple React JS BMI calculator to quickly measure Body Mass Index and track fitness goals with instant results." ,
                link: 'https://bmi-calc-react-project.netlify.app/',
                gitlink: 'https://github.com/Vani201/Bmi_Calculator'
            },
            {
                image: WebsiteImg5,
                description:"A React JS color generator app that creates random colors with hex codes, helping designers and developers find inspiration instantly." ,
                link: 'https://color-react-project.netlify.app/',
                gitlink: 'https://github.com/Vani201/react_color'
            },          
             {
                image: WebsiteImg6,
                description:"A basic React JS calculator for performing quick arithmetic operations like addition, subtraction, multiplication, and division with a clean and user-friendly interface." ,
                link: 'https://simplecalc-project.netlify.app/',
                gitlink: 'https://github.com/Vani201/simple-calculator'
            }
            
        ]
    }
    const config3={
        projects3: [
            {
                image: WebsiteImg7,
                description:"A React JS book tracker app to log, organize, and track your reading progress, helping you manage your favorite books efficiently.",
                link: 'https://bookreading-tracker.netlify.app/',
                gitlink: 'https://github.com/Vani201/bookapp'
            }       
            
        ]
    }

    
  return (
    <section id='projects' className='flex flex-col px-5 py-20 justify-center bg-primary text-white'>
        <div className='w-1/2'>
            <div className='flex flex-col px-10 py-5'> 
                <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'> Projects </h1>
            </div>
        </div>

        <div className= ' relative w-full '>
            <div className='flex flex-col md:flex-row px-10 pb-10 gap-5'>
            { config1.projects1.map((project) =>(
                    <div className='relative flex-wrap'>
                        <img className='md:h-[300px] md:w-[500px] h-[400px] w-[300px]' src={project.image} alt='ProjectImg' />
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'> {project.description}</p>
                            <div className='flex flex-col md:flex-row justify-center gap-5' >
                                <a className='btn' href={project.link} target='_blank' rel='noopener noreferrer'> View Project</a>
                                <a className='btn' href={project.gitlink} target='_blank' rel='noopener noreferrer'> Source Code</a>
                            </div>
                        </div>

                        
                    </div>
              )
            )}
               
           </div>

           <div className='flex flex-col md:flex-row px-10 pb-10 gap-5'>
            { config2.projects2.map((project) =>(
                    <div className='relative flex-wrap'>
                        <img className='md:h-[300px] md:w-[500px] h-[400px] w-[300px]' src={project.image} alt='ProjectImg'/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'> {project.description}</p>
                            <div className='flex flex-col md:flex-row justify-center gap-5' >
                                <a className='btn ' href={project.link} target='_blank' rel='noopener noreferrer'> View Project</a>
                                <a className='btn ' href={project.gitlink} target='_blank' rel='noopener noreferrer'> Source Code</a>
                            </div>
                        </div>

                        
                    </div>
              )
            )}
               
           </div>

           <div className='flex flex-col md:flex-row px-10 pb-10 gap-5'>
            { config3.projects3.map((project) =>(
                    <div className='relative flex-wrap'>
                        <img className='md:h-[300px] md:w-[500px] h-[400px] w-[300px]' src={project.image} alt='ProjectImg'/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'> {project.description}</p>
                            <div className='flex flex-col md:flex-row justify-center gap-5' >
                                <a className='btn ' href={project.link} target='_blank' rel='noopener noreferrer'> View Project</a>
                                <a className='btn ' href={project.gitlink} target='_blank' rel='noopener noreferrer'> Source Code</a>
                            </div>
                        </div>

                        
                    </div>
              )
            )}
               
           </div>
        </div>
    </section>
  )
}

export default Projects
