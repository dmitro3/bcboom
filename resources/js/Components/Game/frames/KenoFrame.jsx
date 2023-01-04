import React from "react";
<<<<<<< HEAD
import keno from "../../../../assets/games/KenoFrame.svg";
=======
import keno from "../../../../assets/games/keno_sm.svg";
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
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
<<<<<<< HEAD
                        height: "100%",
=======
                        height: "23.25rem",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                    }}
                >
                    <Frame src={keno_bg} />
                </Box>
            ) : (
                <Box
                    sx={{
                        mt: "1.25rem",
<<<<<<< HEAD
=======
                        height: "100%",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                    }}
                >
                    <Frame src={keno} />
                </Box>
            )}
        </>
    );
};

export default KenoFrame;
