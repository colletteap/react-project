import React from 'react';
import LargeLogo from '../assets/GrowthBlue.png';
import LogoText from '../assets/TopGridText.png';
import '../styles/Gridlanding.css';

const GridLanding = () => {
  return (
    <div className="GridContainer">
      <div className="ImageContainer">
        <img src={LargeLogo} alt="Growth Logo" />
      </div>
      <div className="ImageContainerText">
        <img src={LogoText} alt="LogoText" />
      </div>
    </div>
  );
};

export default GridLanding;
