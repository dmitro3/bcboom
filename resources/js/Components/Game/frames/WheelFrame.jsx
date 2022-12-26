import React from "react";
import wheel from "../../../../assets/games/Wheel.svg";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const Frame = styled("img")(() => ({}));

const WheelFrame = () => {
    return (
        <Box
            sx={{
                mt: "1.25rem",
            }}
        >
            <Frame src={wheel} />
        </Box>
    );
};

export default WheelFrame;
