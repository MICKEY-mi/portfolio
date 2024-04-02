import React, { useContext } from "react";
import { AiOutlineCloudDownload } from 'react-icons/ai'
import './About.css';
import { themeContext } from "../../Context";
import Resume from '../Services/myresume.pdf'

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    
    <div className="awesome" id="about">
      
        <span className="text-underline" style={{ color: darkMode ? "white" : "" }}>About</span>
        <span></span><p></p>
        <p data-aos="slide-up" data-aos-duration="500" className='bold'>
            I embarked my journey as a B.Tech Electrical Engineering student at Motilal Nehru National Institute of Technology Allahabad College in 2021. Along the way, I fearlessly explored various fields, including Web Developement, Gaming, Competative Programming, Data Structure and Algorithms and VPS hosting. I delved into the world of cutting-edge technologies, such as Python, Django, Cloud computing, React, and Firebase. I also took my passion for technology and leadership to new heights as a Web-Developer of Robotics Club in my college, alongside my equally enthusiastic classmates.
        </p>
        <p data-aos="slide-up" data-aos-duration="500" className='bold'>
            In a constant pursuit of sharing knowledge and fostering growth, I've took part in numerous Hackthons. With a commitment to personal development and a drive for making a positive impact within the tech community.
        </p>

<div>
        <a href={Resume} className="atag">
          <button className="btn-grad"><AiOutlineCloudDownload />Download CV</button>
        </a>
        </div>
        </div>
  

  );
};

export default About;
