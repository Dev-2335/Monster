import React, { useState, useRef } from 'react';
import '../Style/background.css'

const BG = ({holeRef,holePosition}) => {
    
    const getClipPathRule = () => {
      const radius = 60; // Adjust radius as needed
      const circumference = Math.PI * radius;
      const step = Math.PI * 2 / circumference;
      const startStep = circumference * (5 / 8);
  
      let innerPath = [];
      for (let i = startStep; i < circumference + startStep; i++) {
        const angle = step * i;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle); 
        innerPath.push(`${holePosition.x+ x}px ${holePosition.y+ y}px`);
      }
      innerPath.push(innerPath[0]); 
  
      return `polygon( evenodd,
        /* outer rect */
        0 0,       /* top - left */
        100% 0,    /* top - right */
        100% 100%, /* bottom - right */
        0% 100%,   /* bottom - left */
        0 0,       /* and top - left again */
        ${innerPath.join(",")}
      )`;
    };
  
    const holeStyle = {
      overflow :'hidden',
      position: 'absolute',
      width: '100%', 
      height: '5668px',
      top: 0, 
      left: 0, 
      backgroundColor: 'black', 
      display: 'flex',
      justifyContent: 'center',
      zIndex:1,
    
      clipPath: getClipPathRule(), 
    };

    const holeFilterStyle = {
        top: holePosition.y-70,
        left: holePosition.x-70,

    }
  
  
    return (
      <>
      <div className='bg' >
      {/* remove true or false at production time*/}
        {true && <> {true && <div className="hole" ref={holeRef} style={holeStyle}>
        </div>}
        <div  style={holeFilterStyle}  className="hole-fliters"></div>
        </>
        
        }
      
      </div>
        <h1 style={{color:'white', zIndex:103}}>lorem ipsum dolor 
        </h1>
        </>
    );
}

export default BG
