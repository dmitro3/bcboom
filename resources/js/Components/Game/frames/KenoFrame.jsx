import React from "react";
import keno from "../../../../assets/games/KenoFrame.svg";
import keno_bg from "../../../../assets/games/keno_bg.svg";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { useScreenResolution } from "@/hooks/useScreeResolution";

const Frame = styled("img")(() => ({}));

const KenoFrame = () => {
    const { isMobile } = useScreenResolution();
    return (
        <>
            {!isMobile ? (
                <Box
                    sx={{
                        //mt: "1.25rem",
                        height: "100%",
                    }}
                >
                    <Frame src={keno_bg} />
                </Box>
            ) : (
                <Box
                    sx={{
                        mt: "1.25rem",
                    }}
                >
                    <Frame src={keno} />
                </Box>
            )}
        </>
    );
};

export default KenoFrame;
