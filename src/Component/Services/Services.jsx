import React from 'react'
import heartemoji from '../../img/VectorGraphics/heartemoji.png'
import glasses from '../../img/VectorGraphics/glasses.png'
import humble from '../../img/VectorGraphics/humble.png'
import './Services.css'
import Card from '../Card/Card'
const Services = () => {
  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
            <span>My Awesome</span>
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
              color="rgba(252, 166, 31, 0.45)"
            />
          </div>
          <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
        </div>
    </div>

  )
}

export default Services