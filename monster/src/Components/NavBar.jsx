import React from 'react'
import '../Style/navbar.css'
import '../App.css'
import navbar_bg from '../Assets/Images/bar.png'
import navbar_logo from '../Assets/Images/logo.png'
import { Link } from 'react-scroll'

const NavBar = () => {
  const navbarMenus =[
'Home',
 'Tokenomics',
 'Roadmap',
'Nft',
'Bonus',
]
  const renderMenuItems = navbarMenus.map((menu)=>{
    return (
     <div key={menu}>
        <Link key={menu} to={menu}   smooth={true} offset={50} duration={500}>{menu}</Link>
        </div>
    );
  })
  return (
    <>
    <div className="navbar-main ">
        <img  className="navbar-position" src={navbar_bg} alt="Navbar_bg" />
        <div className="navbar-items navbar-position display-flex-spaceBetween">
        <Link to='Home' smooth={true} offset={50} duration={500}>
          <div className="img-container">    <img src={navbar_logo} alt="" /></div>
          </Link>
          <div className="navbar-subItems display-flex-spaceBetween">
          <div className="navbar-menus display-flex-spaceBetween green-energy-fonts">
            {renderMenuItems}
            </div>
                <div className="nav-btn gesrics">
                <button onClick={()=>alert('got it')}>JOIN PRESALE</button>
                </div>
          </div>
        </div>
    </div>
   
    </>
  )
}

export default NavBar
