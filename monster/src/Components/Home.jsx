import React from 'react'
import Navbar from './NavBar.jsx'
import '../Style/home.css'

const Home = () => {
  return (
   <>
   <div className="home-main" style={{zIndex:1222}}>
    <Navbar/>
    <h1>Home Page</h1>
    <button onClick={()=>{alert("got it")}}>HIi</button>
   </div>
   </>
  )
}

export default Home
