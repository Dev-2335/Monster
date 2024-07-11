import React, { useState } from "react";
import "../App.css";
import "../Style/bonus.css";
import bonusBG from "../Assets/Images/Rectangle 12-2.png";
import prizeTable1 from '../Assets/Images/prizeTable.png'
import prizeTable2 from '../Assets/Images/prizetable2.png'
import viewPrizeVector from '../Assets/Images/view-prize-vector.png'

const Bonus = () => {
  const [isBonus1Hovered, setIsBonus1Hovered] = useState(false);
  const [isBonus2Hovered, setIsBonus2Hovered] = useState(false);
  const [bonusTable1,setBonusTable1] = useState(false);
  const [bonusTable2,setBonusTable2] = useState(false);
  const handleHoverExit = (setvalue, setTabel) => {
    setvalue(false);
    setTimeout(() => {
      setTabel(false)
      },150)
  };
  const handleHoverIn = (setvalue,setTable) => {
    setvalue(true);
    setTimeout(() => {
      setTable(true)
      },100)
  };
  return (
    <div className="bonus-main center-item-column">
      <div className="page-heading">Bonus</div>
      <div
        className="bonus1 center-item"
        style={{ height: isBonus1Hovered ? "70vh" : "30vh" }}
        onMouseLeave={() => handleHoverExit(setIsBonus1Hovered,setBonusTable1)}
      >
        <div className="bonus-content">
          <div className="subContent center-item-column">
            <div className="main-content"   style={{ height: isBonus1Hovered ? "70vh" : "30vh" }}>
                <h1 className="green-energy-fonts">Nft Contest</h1>
                <p className="gesrics">hey crypto folks here is a NFT contest where you have to buy nfts to make sureyou enter the contest. which includes many types of nfts with different price tags most loyal holders are more eligible for the future airdop and giveaways</p>
                {bonusTable1 && <div >
                  <p className="gesrics" style={{color:'#00ffff'}}>WE WILL PICK RANDOM NFT HOLDERS AND THEY WILL GET HUGE REWARDS </p>
                  <img src={prizeTable1} alt="" />
                  </div>}
            </div>
            <div
              className="view-prize"
              onMouseEnter={() => handleHoverIn(setIsBonus1Hovered,setBonusTable1)}
            >
               <div className="view-prize-content">
                <p className="gesrics" style={{color:'#00ffff'}}>View Prize</p>
              </div>
              <img src={viewPrizeVector} alt="" />
            </div>
          </div>
        </div>
        <img
          style={{ height: `calc(${isBonus1Hovered ? "70vh" : "30vh"} - 9px)` }}
          src={bonusBG}
          alt=""
        />
      </div>
      <div
        className="bonus2 center-item"
        style={{ height: isBonus2Hovered ? "70vh" : "30vh" }}
        onMouseLeave={() => handleHoverExit(setIsBonus2Hovered,setBonusTable2)}
      >
        <div className="bonus-content">
          <div className="subContent center-item-column">
            <div className="main-content"   style={{ height: isBonus2Hovered ? "70vh" : "30vh" }}>

            <h1 className="green-energy-fonts">LOYALTY CONTEST</h1>
            <p className="gesrics">THE top 10 the supply holders will get many exCiting AIRDROPS AND MANY OTHER REWARDS AFTER THE LAUNCH.</p>
            {bonusTable2 && <div >
                  <p className="gesrics" style={{color:'#00ffff'}}>TOP 10 HOLDERS WILL GET THESE REWARDS </p>
                  <img src={prizeTable2} alt="" />
                  </div>}
            </div>

            <div
              className="view-prize"
              onMouseEnter={() => handleHoverIn(setIsBonus2Hovered,setBonusTable2)}
            >
              <div className="view-prize-content">
                <p className="gesrics" style={{color:'#00ffff'}}>View Prize</p>
              </div>
              <img src={viewPrizeVector} alt="" />
            </div>
          </div>
        </div>
        <img
          style={{ height: `calc(${isBonus2Hovered ? "70vh" : "30vh"} - 9px)` }}
          src={bonusBG}
          alt=""
        />
      </div>
    </div>
  );
};

export default Bonus;
