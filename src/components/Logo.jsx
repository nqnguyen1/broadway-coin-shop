import React, { useState, useEffect } from "react";

import "../styles/Logo.css";
import coinPNG from "../assets/images/Logo Front.png";


export default function Logo() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
    <div className= "titleContainer">
         {
         width > 700 ? (
              <h1 className= "title">Broadway Coin & Stamp Exchange</h1>
            ) :
        <div className="logoJS">
            <div>
              <h1 className="textLine1">BROADWAY</h1>
              <div className="underline"></div>
              <h1 className="textLine2">COIN & STAMP</h1>
            </div>
            <span>
              <img
                src={coinPNG}
                className="coin"
              ></img>
            </span>
          </div>
          }
    </div>
          
        )
}
