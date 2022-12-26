import React from "react";
import dinosaur from "../../../../assets/games/dinosaur.svg";
import { styled } from "@mui/system";

const Frame = styled("img")(() => ({}));

const DinosaurFrame = () => {
    return <Frame src={dinosaur} />;
};

export default DinosaurFrame;
