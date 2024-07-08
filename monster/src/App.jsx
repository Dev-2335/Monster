import React, { useRef,useState } from 'react';
import BG from './Components/BG';

import Home from './Pages/Home';
import RoadMap from './Pages/RoadMap';
import Tokenomics from './Pages/Tokenomics';



const mainStyle={
  position:'absolute',
  top:0,
  left:0,
  zIndex: 100,
  color:'white',
  width:'100%',
  height:'5668px'
}

const holeDivStyle={
  overflow :'hidden',
  position: 'absolute',
  width: '100%', 
  height: '5668px',
  top: 0, 
  left: 0, 
}

const Main = ({setHolePosition}) => {
  const handleMouseMove = (event) => {
    const container = event.currentTarget; 
    const containerRect = container.getBoundingClientRect();
    const relativeX = event.clientX - containerRect.left; 
    const relativeY = event.clientY - containerRect.top; 
    setHolePosition({ x: relativeX, y: relativeY });
  };
  return (
    <div style={holeDivStyle } onMouseMove={handleMouseMove} >
      <Home/>
      <Tokenomics/>
      <RoadMap/>
    </div>
  )
}

const App = () => {
  const hollref = useRef();
  const [holePosition, setHolePosition] = useState({ x: 0, y: 0 });
  



  return (
    <>
    <div >
    <BG holeRef={hollref} holePosition={holePosition} />
    </div>
    <div style={mainStyle}>
      <Main setHolePosition={setHolePosition}/>
    </div>
    </>
  );
};

export default App;
