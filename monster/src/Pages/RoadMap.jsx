import React from "react";
import "../Style/roadMap.css";
import "../App.css";
import questionMark from "../Assets/Images/_.png";





const RoadMap = () => {
  const isPhase1unlocked = true;
  const isPhase2unlocked = false;
  const isPhase3unlocked = false;
  const phase1_list = [
    "Socials",
    "website",
    "Animations",
    "Paid ads",
    "Marketing",
    "Presale",
    "Nft launch",
    "Nft shop and taks",
    "Referral Airdrps",
  ];
  
  const phase2_list = phase1_list;
  const phase3_list = phase1_list;
  const render_phase_list = (phase, index, unlockCondition) => (
    <p className="gesrics">
      <span style={{ color: unlockCondition?"#00ffff":'white' }}>{index + 1}</span>. {phase}
    </p>
  );

  const render_phase1 = phase1_list.map((phase, index) =>
    render_phase_list(phase, index,isPhase1unlocked)
  );
  const render_phase2 = phase2_list.map((phase, index) =>
    render_phase_list(phase, index,isPhase2unlocked)
  );
  const render_phase3 = phase3_list.map((phase, index) =>
    render_phase_list(phase, index,isPhase3unlocked)
  );
  


  return (
    <div className="roadmap-main center-item-column" id="Roadmap">
      <div className="page-heading green-energy-fonts" style={{marginBottom:'50px'}}>Roadmap</div>
      <div className="phase-heading center-item gesrics">
        <div className="phase-heading-unlocked">phase 1</div>
        <div
          className={
            isPhase2unlocked ? "phase-heading-unlocked" : "phase-heading-locked"
          }
        >
          phase 2
        </div>
        <div
          className={
            isPhase3unlocked ? "phase-heading-unlocked" : "phase-heading-locked"
          }
        >
          phase 3
        </div>
      </div>
      <div className="roadmap-content center-item">
        <div className="phase-1">{render_phase1}</div>
        <div className={!isPhase2unlocked ? "phase-2" : "phase-1"}>
          {!isPhase2unlocked && (
            <div className="phase-content">
              <img src={questionMark} alt="" />
              {render_phase2}
            </div>
          )}
          {!isPhase2unlocked && (
            <div className="coming-soon center-item gesrics">
              <p>Coming After Phase 1</p>
            </div>
          )}
          {isPhase2unlocked && render_phase2}
        </div>
        <div className={!isPhase3unlocked ? "phase-3" : "phase-1"}>
          {!isPhase3unlocked && (
            <div className="phase-content">
              <img src={questionMark} alt="" />
              {render_phase3}
            </div>
          )}
          {!isPhase3unlocked && (
            <div className="coming-soon center-item gesrics">
              <p>Coming After Phase 2</p>
            </div>
          )}
          {isPhase3unlocked && render_phase3}
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
