import React from "react";
import stair from "../../../../assets/games/Stairs.svg";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const Frame = styled("img")(() => ({}));

const StairFrame = () => {
    return (
        <Box
            sx={{
                mt: "1.25rem",
            }}
        >
            <Frame src={stair} />
        </Box>
    );
};

export default StairFrame;
