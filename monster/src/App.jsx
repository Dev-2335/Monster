import React from 'react';
import BG from './Components/BG';


const bgStyle ={
  position: 'fixed',
  top:0,
  left:0,
  zIndex: -25
}


const mainStyle={
  position:'absolute',
  top:0,
  left:0,
  zIndex: 100,
  color:'white',
}

const Main = () => {
  return (
    <div>
      <h1>HIi</h1>
    </div>
  )
}

const App = () => {
  return (
    <>
    <div >
    <BG/>
    </div>
    <div style={mainStyle}>
      <Main/>
    </div>
    </>
  );
};

export default App;
