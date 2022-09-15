import React, { useContext }  from 'react'
import heartemoji from '../../img/VectorGraphics/heartemoji.png'
import glasses from '../../img/VectorGraphics/glasses.png'
import humble from '../../img/VectorGraphics/humble.png'
import './Services.css'
import Card from '../Card/Card'
import { themeContext } from "../../Context";


const Services = () => {
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
            <div className="blur s-blur1" style={{ background: "#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="cards">
          <div style={{left:'13rem'}}>
            <Card 
            emoji={heartemoji}
            heading={'Design'}
            detail={'Figma, Sketch, Photoshop, Adobe XD'}
            />
          </div>
          <div style={{top:'12rem',left:'-4rem'}}>
            <Card 
            emoji={glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
            />
          </div>
          <div style={{top:'19rem',left:'12rem'}}>
            <Card
              emoji={humble}
              heading={"UI/UX"}
              detail={
                "Lorem ispum dummy text are usually use in section where we need some random text"
              }
            />
          </div>
          <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
        </div>
    </div>

  )
}

export default Services