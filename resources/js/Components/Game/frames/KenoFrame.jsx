import React from "react";
import keno from "../../../../assets/games/KenoFrame.svg";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const Frame = styled("img")(() => ({}));

const KenoFrame = () => {
    return (
        <Box
            sx={{
                mt: "1.25rem",
            }}
        >
            <Frame src={keno} />
        </Box>
    );
};

export default KenoFrame;
