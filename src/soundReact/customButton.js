import React from 'react';
import ClickSound from "./clicksound.wav";

const CustomButton = () => {
    let audio = new Audio(ClickSound);

    const start = () => {
        audio.play()
    };
    

    return (
        <div>
            <button onClick={start} 
            sx={{
                borderRadius: "15px",
            }}
            > Play Sound</button>
        </div>
    );
};

export default CustomButton;