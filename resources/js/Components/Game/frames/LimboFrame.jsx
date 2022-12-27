import React from "react";
import limbo from "../../../../assets/games/limbo.svg";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const Frame = styled("img")(() => ({}));

const LimboFrame = () => {
    return (
        <Box
            sx={{
                mt: "1.25rem",
            }}
        >
            <Frame src={limbo} />
        </Box>
    );
};

export default LimboFrame;
