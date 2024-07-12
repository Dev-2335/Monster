import React from 'react'
import Navbar from '../Components/NavBar.jsx'
import '../Style/home.css'
import '../App.css'
import SocialMediaButtons from '../Components/SocialMediaButtons.jsx'
import img29 from '../Assets/Images/IMG_0029.png'
import mainText from '../Assets/Images/MAIN TEXT.png'
import  twitterLogo from '../Assets/Images/social-media-twitter.png'
import  telegramLogo from '../Assets/Images/social-media-telegram.png'
import  instagramLogo from '../Assets/Images/social-media-instagram.png'

const Home = () => {
  const telegramLink = 'https://www.google.com';
  const instagramLink = 'https://www.google.com';
  const twitterLink = 'https://www.google.com';

  return (
   <>
   <div className="home-main" style={{zIndex:1222}} id='Home'>
    <Navbar/>
    <div className="home-container center-item">

       <div className="section1">
          <div className="mainText center-item">
            <img src={mainText} alt="" />
          </div>
          <div className="gesrics section1-text center-item">REV UP YOUR REVENUE WITH MONETER EMERCY</div>

          <div className="social-media">
          <a  href={instagramLink}><SocialMediaButtons text={"Telegram"} imagePath={telegramLogo}/></a>
          <a  href={instagramLink}><SocialMediaButtons text={"Instagram"} imagePath={instagramLogo}/></a>
          <a  href={instagramLink}><SocialMediaButtons text={"Twitter"} imagePath={twitterLogo}/></a>
       </div>
       </div>

       {/* section 2 work done */}
       <div className="section2 center-item">
        <img src={img29} alt="img29" />
       </div>
       
    </div>
   </div>
   </>
  )
}

export default Home
