import React from "react";
import tower from "../../../../assets/games/Tower.svg";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const Frame = styled("img")(() => ({}));

const TowerFrame = () => {
    return (
        <Box
            sx={{
                mt: "1.25rem",
            }}
        >
            <Frame src={tower} />
        </Box>
    );
};

export default TowerFrame;
