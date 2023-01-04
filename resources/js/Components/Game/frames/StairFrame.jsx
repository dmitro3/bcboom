import React from "react";
import stair from "../../../../assets/games/Stairs.svg";
import stair_sm from "../../../../assets/games/stairs_sm.svg";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { useScreenResolution } from "@/hooks/useScreeResolution";

const Frame = styled("img")(() => ({}));

const StairFrame = () => {
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
                    <Frame src={stair} />
                </Box>
            ) : (
                <Box
                    sx={{
                        // mt: "1.25rem",
                        width: "95%",
                    }}
                >
                    <Frame src={stair_sm} />
                </Box>
            )}
        </>
    );
};

export default StairFrame;
