import React, {useEffect,useContext} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Pendown from "../../img/pendown.png";
import './Projects.css'

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
      ]
    
    

      const theme = useContext(themeContext);
      const darkMode = theme.state.darkMode;

  return (



    <div className="" id="projects">

      <span style={{color: darkMode?'white': ''}} className="projects">Projects</span>


     



      </div>



//     <div className='projects'>
//     <div className='projects-content'>
//       <div className='projects-header'>
//         <h2 className='projects-title'>Projects</h2>
//         <p className='projects-description'>Check out some of my work</p>
//       </div>
     
//     </div>
//   </div>
  )
}

export default Projects
