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
                    md: "18.25rem",
                    lg: "18.25rem",
                    xl: "31.25rem",
                },
                background: `linear-gradient(95.62deg, #3971E8 11.91%, #377EEC 60.57%, rgba(58, 124, 234, 0) 100% ), url(${imgUrl})`,
                backgroundSize: {
                    md: "70%, cover",
                    lg: "70%, cover",
                    xl: "70%, cover",
                },
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundPosition: "left, right",
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
                    ...customStyles,
                }}
            >
                <BoldText>{headerText}</BoldText>
            </Box>
        </Box>
    );
};

export default PromotionsHeader;
