import React from 'react';
import Grid from "@mui/joy/Grid";
import ClickSound from "./clicksound.wav";

const CustomButton = ({children}) => {
    let audio = new Audio(ClickSound);

    const buttonStyle = {
        fontFamily: "Helvetica, sans serif",
        border: "solid 1px #233349",
        borderRadius: "15px",
        backgroundColor: "white",
        color: "#233349",
        padding: "10px 20px",
        cursor: "pointer",
        transition: "background-color 0.3s",
        textDecoration: "none",
    };

    const start = () => {
        audio.play()
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