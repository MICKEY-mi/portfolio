import React, {useEffect,useContext} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Pendown from "../../img/pendown.png";

import { themeContext } from "../../Context";

const Projects = () => {

    useEffect(()=> {
        AOS.init({duration: 1000})
    })
    
      const projectsData = () => [
        {
          id: 1,
          src: Pendown,
          desc: "Sandesh is a Chat App made using ReactJS + Tailwind CSS + ChatEngine API Service + Firebase authentication...",
          demo: "https://sandeshh.netlify.app/",
          code: "https://github.com/dipayansarkar47/Sandesh"
        },
        {
          id: 2,
          src: Pendown,
          desc: "This Full-Stack ShopKaro e-commerce website is made using ReactJS, Tailwind CSS, Firebase....",
          demo: "https://shopeasyy.vercel.app/",
          code: "https://github.com/dipayansarkar47/shopeasy"
        },
        {
          id: 3,
          src: Pendown,
          desc: "An Artificially Intelligent Chatbot using the GPT-4 Model to help people.",
          demo: "https://cwbbot.vercel.app/",
          code: "https://github.com/dipayansarkar47/ai-chatbot"
        },
        {
          id: 4,
          src: Pendown,
          // desc: "Keeper is a simple note taking application made using Flutter...",
          demo: "https://opeditor.vercel.app/",
          code: "https://github.com/dipayansarkar47/online-code-editor"
        },
        {
          id: 5,
          src: Pendown,
          // desc: "It is a Weather application which shows temperatures of various cities across the globe made using REST API...",
          demo: "https://upscaleai.vercel.app/",
          code: "https://github.com/dipayansarkar47/upscale-ai"
        },
        {
          id: 6,
          src: Pendown,
          // desc: "It is a Face-Detection application made using Python and Computer Vision...",
          demo: "https://gist-ai.vercel.app/",
          code: "https://github.com/dipayansarkar47/Gist.AI-Summarizer"
        },
        {
          id: 7,
          src: Pendown,
          // desc: "It is a Face-Detection application made using Python and Computer Vision...",
          demo: "https://gist-ai.vercel.app/",
          code: "https://github.com/dipayansarkar47/Gist.AI-Summarizer"
        },
        {
          id: 8,
          src: Pendown,
          // desc: "It is a Face-Detection application made using Python and Computer Vision...",
          demo: "https://gist-ai.vercel.app/",
          code: "https://github.com/dipayansarkar47/Gist.AI-Summarizer"
        },
      ]
    
    

      const theme = useContext(themeContext);
      const darkMode = theme.state.darkMode;

  return (
<>

<div name="projects" className='h-auto max-h-screen-lg' id='projects'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>

        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0 justify-center'>
        {
            projectsData().map(({ id, src, desc, demo, code }) => (

              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
                <p className='p-2 text-justify font-extralight'>{desc}</p>
                <div className='flex items-center justify-center px-5'>
                  
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md text-white'>
                    <a href={demo}>Demo</a>
                  </button>
                  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md text-white'>
                    <a href={code}>Code</a>
                  </button>
                </div>
              </div>

            ))
          }

        </div>
      </div>
    </div>
    </>
  )
}

export default Projects
