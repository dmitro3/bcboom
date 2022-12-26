import React from "react";
import coinFlip from "../../../../assets/games/CoinFlip.svg";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const Frame = styled("img")(() => ({}));

const CoinFlipFrame = () => {
    return (
        <Box
            sx={{
                mt: "1.25rem",
            }}
        >
            <Frame src={coinFlip} />
        </Box>
    );
};

export default CoinFlipFrame;
