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
                    xs: "12.875rem",
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
                    xs: "cover",
                    sm: "cover",
                    md: "cover",
                    lg: "cover",
                    xl: "cover",
                },
                backgroundRepeat: "no-repeat",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                backgroundPosition: {
                    xs: "center center",
                    sm: "center center",
                },
                width: { xs: "98%", md: "98%" },

                mx: "auto",

                ...customImageStyles,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                    paddingLeft: { xs: "8%", md: "2%" },
                    textAlign: "left",
                    borderRight: "none",
                    justifySelf: "left",

                    width: {
                        xs: "65%",
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
