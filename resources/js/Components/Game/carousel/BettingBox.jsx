import { Box, Typography } from "@mui/material";
import React from "react";

const BettingBox = ({ multiplier, hits }) => {
    return (
        <Box
            sx={{
                borderRadius: "0.3125rem",
                background: { xs: "#2E3665", md: "#1D234F" },
                width: { xs: "4.25rem", sm: "4.25rem", md: "4.25rem" },
                height: "2rem",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                cursor: "pointer",
            }}
        >
            <Box
                sx={{
                    width: "80%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 800,
                        fontSize: ".75rem",
                        width: "100%",
                    }}
                >
                    {multiplier}x
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 800,
                        fontSize: ".5rem",
                        width: "100%",
                        color: "#A6B0DA",
                    }}
                >
                    {hits} Hits
                </Typography>
            </Box>
        </Box>
    );
};

export default BettingBox;
