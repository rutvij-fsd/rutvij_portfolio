import React, { useContext }  from 'react'
import heartemoji from '../../img/VectorGraphics/heartemoji.png'
import glasses from '../../img/VectorGraphics/glasses.png'
import humble from '../../img/VectorGraphics/humble.png'
import './Services.css'
import Card from '../Card/Card'
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
          {/* dark mode */}
            <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
            <span>Services</span>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.
                <br />
                 Necessitatibus porro hic ullam, nihil labore debitis!.
            </span>
            <button className="button s-button">Download CV</button>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94", display: darkMode ? "none" : ""}}></div>
        </div>
        {/* right side */}
        <div className="cards">
          {/* first card */}
          <motion.div
            initial={{ left: "25rem" }}
            whileInView={{ left: "14rem" }}
            transition={transition}
          >
            <Card 
            emoji={heartemoji}
            heading={'Design'}
            detail={'Figma, Sketch, Photoshop, Adobe XD'}
            />
          </motion.div>
          {/* second card */}
          <motion.div
            initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}
          >
            <Card 
            emoji={glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
            />
          </motion.div>
          {/* 3rd */}
          <motion.div
            initial={{ top: "19rem", left: "25rem" }}
            whileInView={{ left: "12rem" }}
            transition={transition}
          >
            <Card
              emoji={humble}
              heading={"UI/UX"}
              detail={
                "Lorem ispum dummy text are usually use in section where we need some random text"
              }
            />
          </motion.div>
          <div className="blur s-blur2" style={{ background: "var(--purple)" , display: darkMode ? "none" : "" }}></div>
        </div>
    </div>

  )
}

export default Services