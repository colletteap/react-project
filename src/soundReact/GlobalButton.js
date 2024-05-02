import React from 'react';
import { useSoundContext } from './SoundContext';
import SoundOn from '../assets/SoundOn.png';
import SoundOff from '../assets/SoundOff.png';

const SoundButton = () => {
  const { isSoundOn, toggleSound } = useSoundContext();
  const buttonStyle = {
    fontFamily: "Arial, sans serif",
    fontWeight: "bold",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
    borderRadius: "15px",
    transform: "scale(0.3)",
    padding: "15px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    textDecoration: "none",
    color: "#ffff",
    backgroundColor: "#233349",
};
  return (
    <button onClick={toggleSound} style={buttonStyle}>
      <img src={isSoundOn ? SoundOff : SoundOn}/>
    </button>
  );
};

export default SoundButton;
