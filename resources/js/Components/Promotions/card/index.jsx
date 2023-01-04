import React from "react";
import { Box } from "@mui/material";

const PromotionCard = ({ customStyles, children }) => {
    return (
        <Box
            sx={{
                width: {
                    xs: "90%",
                    md: "48%",
                },
                height: { xs: "11rem", md: "12.75rem" },
                borderRadius: "1.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                flexDirection: "column",
                padding: "2rem",
                mb: {
                    xs: "1rem",
                    md: "0",
                },
                ...customStyles,
            }}
        >
            {children}
        </Box>
    );
};

export default PromotionCard;
