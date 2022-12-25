import React from "react";
import dinosaur from "../../../../assets/games/dinosaur.svg";
import { styled } from "@mui/system";

const Frame = styled("img")(() => ({}));

const DinosaurFrames = () => {
    return <Frame src={dinosaur} />;
};

export default DinosaurFrames;
