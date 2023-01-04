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
<<<<<<< HEAD
                        width: "80%",
=======
                        width: "95%",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                    }}
                >
                    <Frame src={stair_sm} />
                </Box>
            )}
        </>
    );
};

export default StairFrame;
