import React, { useContext } from "react";
import { AiOutlineCloudDownload } from 'react-icons/ai'
// import './About.css';
import { themeContext } from "../../Context";
import Resume from '../Services/myresume.pdf'

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (

    <div className="my-6" id="about">

    <div name="about" className='w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
                <div className='pb-8'>

                    <h2 className='text-4xl  font-bold inline border-b-4 border-gray-500'>About</h2>

                </div>

                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                I embarked my journey as a B.Tech Electrical Engineering student at Motilal Nehru National Institute of Technology Allahabad College in 2021. Along the way, I fearlessly explored various fields, including Web Developement, Gaming, Competative Programming, Data Structure and Algorithms and VPS hosting. I delved into the world of cutting-edge technologies, such as Python, Django, Cloud computing, React, and Firebase. I also took my passion for technology and leadership to new heights as a Web-Developer of Robotics Club in my college, alongside my equally enthusiastic classmates.
                </p>
                <br />
                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                In a constant pursuit of sharing knowledge and fostering growth, I've took part in numerous Hackthons. With a commitment to personal development and a drive for making a positive impact within the tech community.
                </p>
                
                <div data-aos="zoom-in" data-aos-duration="500" className='mb-20 fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-10 gap-2'>


                    <AiOutlineCloudDownload />
                    <a href="/" download>Download CV</a>
                </div>
            </div>
        </div>
        </div>
    


  );
};

export default About;
