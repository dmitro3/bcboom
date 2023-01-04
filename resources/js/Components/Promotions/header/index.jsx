import React from "react";
import BoldText from "../Typography/BoldText";
import { Box } from "@mui/material";

const PromotionsHeader = ({
    imgUrl,
    imgUrL_sm,
    headerText,
    customStyles,
    customImageStyles,
}) => {
    return (
        <Box
            sx={{
                height: {
<<<<<<< HEAD
=======
                    xs: "12.875rem",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                    sm: "17rem",
                    md: "10rem",
                    lg: "12rem",
                    xl: "17rem",
                },
                background: {
                    xs: `url(${imgUrL_sm})`,
                    sm: `url(${imgUrL_sm})`,
                    md: `url(${imgUrl})`,
                    lg: `url(${imgUrl})`,
                    xl: `url(${imgUrl})`,
                },
                backgroundSize: {
<<<<<<< HEAD
                    sm: "100%",
                    md: "100%",
                    lg: "100%",
                    xl: "100%",
=======
                    xs: "cover",
                    sm: "cover",
                    md: "cover",
                    lg: "cover",
                    xl: "cover",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                },
                backgroundRepeat: "no-repeat",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
<<<<<<< HEAD

=======
                backgroundPosition: { xs: "-1.5rem", sm: "center" },
                width: { xs: "86%", md: "98%" },

                mx: "auto",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                ...customImageStyles,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
<<<<<<< HEAD
                    paddingLeft: "2%",
=======
                    paddingLeft: { xs: "7%", md: "2%" },
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                    textAlign: "left",
                    borderRight: "none",
                    justifySelf: "left",

                    width: {
<<<<<<< HEAD
                        xs: "40%",
=======
                        xs: "65%",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                        sm: "60%",
                        md: "50%",
                        lg: "60%",
                        xl: "60%",
                    },
                    //height: "100%",
                    ...customStyles,
                }}
            >
                <BoldText>{headerText}</BoldText>
            </Box>
        </Box>
    );
};

export default PromotionsHeader;
