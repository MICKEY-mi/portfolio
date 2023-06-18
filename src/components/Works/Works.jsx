import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/robo.png";
import Fiverr from "../../img/avishkar.png";
import Shopify from "../../img/pendown2.png";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
            Collaborate with Students to help them in building their websites.
            <br />
            provide hosting to them via different paid and unpaid platforms to make their website live.
            <br />
            Developed a website for Senior mentorship program to provide
            <br />
            juniors study materials and to resolve their queries as per the new curriculum.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Work with Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <h1>Fresher</h1>
            {/*<img src={Amazon} alt="" />*/}
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
         
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
