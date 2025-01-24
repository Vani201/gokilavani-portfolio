import React from 'react'
import WebsiteImg1 from '../assets/joke.jpg'
import WebsiteImg2 from '../assets/colorapp.png'
import WebsiteImg3 from '../assets/calculator.png'
import WebsiteImg4 from '../assets/bookapp.jpg'
import WebsiteImg5 from '../assets/todolist.png'



const Projects = () => {

    const config1={
        projects1: [
            {
                image: WebsiteImg5,
                description:"A simple and intuitive React app to manage your tasks efficiently. Add, edit, and mark tasks as completed with ease to stay organized and productive.",
                link: 'https://gokilavani-todolist-react.netlify.app/',
                gitlink:'https://github.com/Vani201/todolist_react'
            },
            {
                image: WebsiteImg1,
                description:"A fun interactive application built using React.js that delivers random jokes with a single click! Users can click a button to receive a new joke, making it a delightful way to lighten the mood. It shows my skills in handling API requests and creating responsive designs" ,
                link: 'https://react-joke-generator-project.netlify.app/',
                gitlink:'https://github.com/Vani201/JokeGenerator'
            },
            {
                image: WebsiteImg2,
                description:"A React.js app that lets you preview colors instantly! Enter a color name in the input box, and the app displays the corresponding color eith its hex value. A simple project demonstrating React State Management and dynamic styling" ,
                link: 'https://color-react-project.netlify.app/',
                gitlink: 'https://github.com/Vani201/react_color'
            }
    
        ]
    }

    const config2={
        projects2: [
             {
                image: WebsiteImg3,
                description:"A basic yet functional calculator built using HTML, CSS and JS. It performs basic arithmetic operations, featuring a clean interface and responsive design. It demonstrates my ability to create interactive web applications and manage user input effectively" ,
                link: 'https://simplecalc-project.netlify.app/',
                gitlink: 'https://github.com/Vani201/simple-calculator'
            },
            {
                image: WebsiteImg4,
                description:"Track your reading journey with ease using the Book Reading Tracker app! Log books, monitor progress, set goals, and stay motivated to achieve your reading milestones—all in one simple, user-friendly platform." ,
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
                        <img className='h-[250px] w-[400px]' src={project.image} alt='ProjectImg' />
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'> {project.description}</p>
                            <div className='flex justify-center gap-5' >
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
                        <img className='h-[250px] w-[400px]' src={project.image} alt='ProjectImg'/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'> {project.description}</p>
                            <div className='flex justify-center gap-5' >
                                <a className='btn' href={project.link} target='_blank' rel='noopener noreferrer'> View Project</a>
                                <a className='btn' href={project.gitlink} target='_blank' rel='noopener noreferrer'> Source Code</a>
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
