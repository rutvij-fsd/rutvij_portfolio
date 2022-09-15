import React, { useContext } from 'react'
import './Works.css'
import amazon from '../../img/WebIcon/amazon.png'
import Facebook from '../../img/WebIcon/Facebook.png'
import fiverr from '../../img/WebIcon/fiverr.png'
import Upwork from '../../img/WebIcon/Upwork.png'
import Shopify from '../../img/WebIcon/Shopify.png'
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Works = () => {

   // context
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

  return (
    <div className="works" id="works">
      {/* left side */}
        <div className="awesome">
           {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </spane>
            <button className="button s-button">Hire Me</button>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>

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
                <img src={fiverr} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={amazon} alt="" />
            </div>{" "}
            <div className="w-secCircle">
                <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Facebook} alt="" />
            </div>
        </motion.div>
          

        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Works