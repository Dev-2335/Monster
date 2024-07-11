import React from 'react';
import '../Style/nft.css'; 
import '../App.css';     
import box from '../Assets/Images/BOX.png'
import quetionMark from '../Assets/Images/_.png'

const NFT = () => {
  const nftItems = Array(8).fill('Coming After Launch'); 
  return (
    <div className="nft-main center-item-column">
      <div className="page-heading ">NFT</div>
      <div className="nft-container">
        {nftItems.map((item, index) => (
          <div key={index} className="nft-boxes center-item gesrics">
            <img src={box} alt="" />
            <img id='quetionMarkImg' src={quetionMark} alt="" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFT;
