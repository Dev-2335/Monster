import React from 'react'
import '../Style/font.css';
import '../Style/roadMap.css';

const RoadMap = () => {
  return (
    <div className="container" id='RoadMap'>
        <div className="row">
            <div className="col text-center green-energy-font title">ROADMAP</div>
        </div>
        <div className="row">
          <div className="col">
            <div className='phase1-title gesrics-font'>PHASE 1</div>
            <div className='phase1'>
            <ul className="text gesrics-font">
            <li>1. SOCIALS</li>
            <li>2. WEBSITE</li>
            <li>3. ANIMATIONS</li>
            <li>4. PAID ADS</li>
            <li>5. MARKETING</li>
            <li>6. PRESALE</li>
            <li>7. NFT LAUNCH</li>
            <li>8. NFT SHOP AND TASKS</li>
            <li>9. REFERRAL AIRDROPS</li>
          </ul>
            </div>
          </div>
          <div className="col">
            <div className='phase-title gesrics-font'>PHASE 2</div>
            <div className='phase'>
            <ul className="text gesrics-font" style={{position:'absolute', zIndex: '1'}}>
            <li>1. SOCIALS</li>
            <li>2. WEBSITE</li>
            <li>3. ANIMATIONS</li>
            <li>4. PAID ADS</li>
            <li>5. MARKETING</li>
            <li>6. PRESALE</li>
            <li>7. NFT LAUNCH</li>
            <li>8. NFT SHOP AND TASKS</li>
            <li>9. REFERRAL AIRDROPS</li>
          </ul>
          <span className='lock'>?</span>
          <span className='gesrics-font lock-text'>COMING AFTER<br/> PHASE 1</span>
            </div>
          </div>
          <div className="col">
            <div className='phase-title gesrics-font'>PHASE 3</div>
            <div className='phase'>
            <ul className="text gesrics-font" style={{position:'absolute', zIndex: '1'}}>
            <li>1. SOCIALS</li>
            <li>2. WEBSITE</li>
            <li>3. ANIMATIONS</li>
            <li>4. PAID ADS</li>
            <li>5. MARKETING</li>
            <li>6. PRESALE</li>
            <li>7. NFT LAUNCH</li>
            <li>8. NFT SHOP AND TASKS</li>
            <li>9. REFERRAL AIRDROPS</li>
          </ul>
          <span className='lock'>?</span>
          <span className='gesrics-font lock-text'>COMING AFTER<br/> PHASE 2</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default RoadMap;
