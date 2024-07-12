import React, { useState } from 'react';
import '../Style/socialMediaButtons.css'; 
import '../App.css'
const SocialMediaButtons = ({text, imagePath}) => {

  const nonHoverStyle = {
    opacity: 0,
    top: '9vh'
  }
  const hoverdStyle = {
    opacity: 1,
    top: '1vh'
  }

  const [mediaLogoStyle,setMediaLogoStyle] = useState(nonHoverStyle)
  const handleHoverIn = ()=> setMediaLogoStyle(hoverdStyle)
  const handleHoverOut = ()=> setMediaLogoStyle(nonHoverStyle)
  return (
    <div className='socialMediaButtons-main'>
      <div className="compound-box center-item-column">
      <div className="logo-box-bg center-item"  style={mediaLogoStyle}>
          <img src={imagePath} alt="" />
        </div>
        <div className="text-box-bg center-item" onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
        <h4 className="gesrics"> {text}</h4>
        </div>

       
      </div>
    </div>
  );
};

export default SocialMediaButtons;
