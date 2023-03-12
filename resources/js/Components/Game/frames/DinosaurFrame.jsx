import React from "react";
import dinosaur_bg from "../../../../assets/games/dinosaur_frame_bg.svg";
import dinosaur_sm from "../../../../assets/games/dinosaur.svg";
import { styled } from "@mui/system";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import { Box } from "@mui/material";
const Frame = styled("div")(() => ({
    height: "100%",
    width: "100%",
}));

const DinosaurFrame = ({ gameDetails }) => {
    const { isMobile } = useScreenResolution();

    return (
        <Frame>
            <iframe src={gameDetails.link}></iframe>
        </Frame>
    );
};


export default DinosaurFrame;
