import React from "react";
import dinosaur_bg from "../../../../assets/games/dinosaur_frame_bg.svg";
import dinosaur_sm from "../../../../assets/games/dinosaur.svg";
import { styled } from "@mui/system";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import { Box } from "@mui/material";
<<<<<<< HEAD
const Frame = styled("img")(() => ({}));
=======
const Frame = styled("img")(() => ({
    height: "100%",
    width: "100%",
}));
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa

const DinosaurFrame = () => {
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
                    <Frame src={dinosaur_bg} />
                </Box>
            ) : (
                <Box
<<<<<<< HEAD
                    sx={
                        {
                            // mt: "1.25rem",
                        }
                    }
=======
                    sx={{
                        // mt: "1.25rem",

                        width: "100%",
                        height: "12.4375rem",
                    }}
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                >
                    <Frame src={dinosaur_sm} />
                </Box>
            )}
        </>
    );
};

export default DinosaurFrame;
