import React from "react";
import limbo from "../../../../assets/games/limbo.svg";
import limbo_sm from "../../../../assets/games/limbo_sm.svg";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { useScreenResolution } from "@/hooks/useScreeResolution";

const Frame = styled("img")(() => ({}));

const LimboFrame = () => {
    const { isMobile } = useScreenResolution();

    return (
        <>
            {!isMobile ? (
                <Box
                    sx={
                        {
                            // mt: "1.25rem",
                        }
                    }
                >
                    <Frame src={limbo_sm} />
                </Box>
            ) : (
                <Box
                    sx={
                        {
                            // mt: "1.25rem",
                        }
                    }
                >
                    <Frame src={limbo} />
                </Box>
            )}
        </>
    );
};

export default LimboFrame;
