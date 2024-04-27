import React from 'react';
import ClickSound from "./clicksound.wav";

const CustomButton = () => {
    let audio = new Audio(ClickSound);

    const start = () => {
        audio.play()
    };

    const 

    return (
        <div>
            <button onClick={start}> Play Sound</button>
        </div>
    );
};

export default CustomButton;