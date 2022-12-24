import React from "react";
import { Box } from "@mui/material";

const PromotionCard = ({ customStyles, children }) => {
    return (
        <Box
            sx={{
                width: "48%",
                height: "12.75rem",
                borderRadius: "1.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                flexDirection: "column",
                padding: "2rem",
                ...customStyles,
            }}
        >
            {children}
        </Box>
    );
};

export default PromotionCard;
