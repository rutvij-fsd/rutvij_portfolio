import React from 'react'
import './Works.css'
import amazon from '../../img/WebIcon/amazon.png'
import Facebook from '../../img/WebIcon/Facebook.png'
import fiverr from '../../img/WebIcon/fiverr.png'
import Upwork from '../../img/WebIcon/Upwork.png'
import Shopify from '../../img/WebIcon/Shopify.png'

const Works = () => {
  return (
    <div className="works" id="works">
      {/* left side */}
        <div className="awesome">
          {/* dark Mode */}
          <span>
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
        <div className="w-mainCircle">
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
        </div>
          

        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Works