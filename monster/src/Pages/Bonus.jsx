import React from 'react'
import '../Style/font.css';
import '../Style/bonus.css';

const Bonus = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center green-energy-font title">BONUS</div>
            </div>
            <div className="row">
                <div className="bonus-card col">
                    <div className="bonus-header green-energy-font">NFT CONTEST</div>
                    <div className="bonus-description gesrics-font">
                        Hey crypto folks, here is an NFT contest where you have to buy NFTs to make sure you enter the contest.
                        Which includes many types of NFTs with different price tags. Most loyal holders are more eligible for the future airdrop and giveaways.
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="bonus-card col">
                    <div className="bonus-header  green-energy-font">LOYALTY CONTEST</div>
                    <div className="bonus-description  gesrics-font">
                        The top 10 supply holders will get many exciting airdrops and many other rewards after the launch.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bonus;
