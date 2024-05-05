import React from 'react';
import Grid from "@mui/joy/Grid";
import ClickSound from "./clicksound.wav";
import { useSoundContext } from './SoundContext';

const CustomButton = ({children, onClick, variant}) => {
    const { isSoundOn } = useSoundContext();

    // bringing in state so that it knows what sound to connect to

    let audio = new Audio(ClickSound);

    const buttonStyle = {
        fontFamily: "Quicksand",
        fontWeight: "bold",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
        borderRadius: "15px",
        fontSize: variant === "Blog" ? "1.9em" : "1em",
        padding: variant === "Blog" ? "40px" : "10px 20px",
        cursor: "pointer",
        transition: "background-color 0.3s",
        textDecoration: "none",
        color: variant === "Skill" ? "#233349"
            : variant === "Question" ? "#ffff"
            : variant === "Post" ? "black" : "#233349",
        backgroundColor: variant === "Skill" ? "#ffff"
            : variant === "Question" ? "#233349"
            : variant === "Post" ? "#fcf9da"
            : "#ffff",
    };

    const start = () => {
        if (isSoundOn) {
/* state here is true, so it will always play unless global button is clicked
then the rest of the start function does not execute and no sound*/
        audio.play();
        }
        console.log("onClick clicked");
        if (onClick) {
            onClick()
        }
    };

    return (
        <Grid>
            <button onClick={start} style={buttonStyle}>
                {children}
            </button>
        </Grid>
    );
};

export default CustomButton;