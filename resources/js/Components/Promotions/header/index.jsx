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
                    md: "260px",
                    lg: "278px",
                    xl: "500px",
                },
                background: `linear-gradient(95.62deg, #3971E8 11.91%, #377EEC 60.57%, rgba(58, 124, 234, 0) 100% ), url(${imgUrl})`,
                backgroundSize: {
                    md: "70%, 58%",
                    lg: "70%, 58%",
                    xl: "70%, 57%",
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
                    justifyContent: "center",
                    textAlign: "center",
                    borderRight: "none",
                    width: "60%",
                    ...customStyles,
                }}
            >
                <BoldText>{headerText}</BoldText>
            </Box>
        </Box>
    );
};

export default PromotionsHeader;
