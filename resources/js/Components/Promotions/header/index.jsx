import React from "react";
import BoldText from "../Typography/BoldText";
import { Box } from "@mui/material";

const PromotionsHeader = ({
    imgUrl,
    headerText,
    customStyles,
    customImageStyles,
}) => {
    return (
        <Box
            sx={{
                height: {
                    md: "14rem",
                    lg: "14rem",
                    xl: "14rem",
                },
                background: `url(${imgUrl})`,
                backgroundSize: {
                    md: "100%",
                    lg: "100%",
                    xl: "100%",
                },
                backgroundRepeat: "no-repeat",
                borderRadius: "10px",
                display: "flex",

                ...customImageStyles,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                    paddingLeft: "2%",
                    textAlign: "left",
                    borderRight: "none",

                    width: {
                        md: "50%",
                        lg: "60%",
                        xl: "60%",
                    },
                    height: "100%",
                    ...customStyles,
                }}
            >
                <BoldText>{headerText}</BoldText>
            </Box>
        </Box>
    );
};

export default PromotionsHeader;
