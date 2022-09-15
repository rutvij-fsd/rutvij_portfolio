import React, { useContext } from 'react'
import './Intro.css'
import github from '../../img/WebIcon/github.png'
import linkedin from '../../img/WebIcon/linkedin.png'
import instagram from '../../img/WebIcon/instagram.png'
import Vector1 from '../../img/VectorGraphics/Vector1.png'
import Vector2 from '../../img/VectorGraphics/Vector2.png'
import Rutvij from '../../img/VectorGraphics/Rutvij.png'
import thumbup from '../../img/VectorGraphics/thumbup.png'
import crown from '../../img/VectorGraphics/crown.png'
import glassesimoji from '../../img/VectorGraphics/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from "../../Context";

function Intro() {

     // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
                <span>Rutvij Patel</span>
                <span>Frontend Developer with high level of experience in web designing
            and development, producting the Quality work</span>
            </div>
            <button className="button i-button">Hire Me</button>
            <div className="i-icon">
                <img src={github} alt="" />
                <img src={linkedin} alt="" />
                <img src={instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={Rutvij} alt="" />
            <img src={glassesimoji} alt="" />
            <div style={{top:'-4%', left:'64%'}}>
                <FloatingDiv
                 image ={crown}
                 txt1 ="Web"
                 txt2="Developer"
                />
            </div>
            <div style={{top:'18rem', left:'0rem'}}>
                <FloatingDiv
                 image ={thumbup}
                 txt1 ="Best Design"
                 txt2="Award"
                />
            </div>
            <div className="blur" style={{background: '#edd0ff', top:'-18%', left:'56%'}}></div>
            <div className="blur" style={{background: "#C1F5FF", top: "15rem", left: "-9rem"}}></div>
        </div>
    </div>
  )
}

export default Intro