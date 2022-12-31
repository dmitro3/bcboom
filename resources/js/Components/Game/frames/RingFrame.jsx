import React from "react";
import ring from "../../../../assets/games/Ring.svg";
import ring_bg from "../../../../assets/games/ring_bg.svg";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { useScreenResolution } from "@/hooks/useScreeResolution";

const Frame = styled("img")(() => ({}));

const RingFrame = () => {
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
                    <Frame src={ring_bg} />
                </Box>
            ) : (
                <Box
                    sx={
                        {
                            // mt: "1.25rem",
                        }
                    }
                >
                    <Frame src={ring} />
                </Box>
            )}
        </>
    );
};

export default RingFrame;
