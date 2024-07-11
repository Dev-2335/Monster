import React from 'react'
import '../Style/tokenomics.css'
import '../App.css'
import logo from '../Assets/Images/logo.png'

const Tokenomics = () => {
  const max_supply_value = '3,910,000,000';
  const presale_value = '1,500,000,000';
  return (
    <div className='tokenomics-main' id='Tokenomics'> 
        <div className="page-heading">
          <p className='green-energy-fonts'>Tokenomics</p>
        </div>
        <div className="tokenomics-middle-section">
          <div className="liquidity gesrics"> 
          <h2 className='tokenomics-middle-section-heading'>LIQUIDITY</h2>
          <h1>LP BURN</h1>
          </div>
          <div className="tokenomics-logo"> <img src={logo} alt="" />
           </div>
          <div className="tokenomics-max-supply gesrics">
          <h2 className='tokenomics-middle-section-heading'>Max Supply</h2>
          <h1>{max_supply_value}</h1>
           </div>
        </div>
        <div className="tokenomics-presale gesrics"> 
        <h2 className='tokenomics-middle-section-heading'>PRESALE</h2>
        <h1>{presale_value}</h1>
        </div>
    </div>
  )
}

export default Tokenomics
