import React from "react";
import ring from "../../../../assets/games/Ring.svg";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const Frame = styled("img")(() => ({}));

const RingFrame = () => {
    return (
        <Box
            sx={{
                mt: "1.25rem",
            }}
        >
            <Frame src={ring} />
        </Box>
    );
};

export default RingFrame;
