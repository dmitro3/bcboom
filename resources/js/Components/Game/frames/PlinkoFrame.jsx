import React from "react";
import plinko from "../../../../assets/games/plinko_bg.svg";
import plinko_sm from "../../../../assets/games/plinko_sm.svg";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { useScreenResolution } from "@/hooks/useScreeResolution";

const Frame = styled("img")(() => ({}));

const PlinkoFrame = () => {
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
                    <Frame src={plinko} />
                </Box>
            ) : (
                <Box
                    sx={
                        {
                            // mt: "1.25rem",
                        }
                    }
                >
                    <Frame src={plinko_sm} />
                </Box>
            )}
        </>
    );
};

export default PlinkoFrame;
