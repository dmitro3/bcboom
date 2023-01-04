import React from "react";
import coinFlip from "../../../../assets/games/coin_flip_sm.svg";
import coinFlip_bg from "../../../../assets/games/coinflip_bg.svg";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { useScreenResolution } from "@/hooks/useScreeResolution";

const Frame = styled("img")(() => ({}));

const CoinFlipFrame = () => {
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
                    <Frame src={coinFlip_bg} />
                </Box>
            ) : (
                <Box
                    sx={
                        {
                            // mt: "1.25rem",
                        }
                    }
                >
                    <Frame src={coinFlip} />
                </Box>
            )}
        </>
    );
};

export default CoinFlipFrame;
