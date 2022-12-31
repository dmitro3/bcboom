import { Typography } from "@mui/material";
import React from "react";

const BoldText = ({ weight, children, customStyles }) => {
    return (
        <Typography
            sx={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: `${weight ? weight : 900}`,
                fontSize: {
                    xs: "1.5rem",
                    sm: "2rem",
                    md: "2rem",
                    lg: "2.5rem",
                    xl: "2.5rem",
                },
                color: "#FFF96A",
                ...customStyles,
            }}
        >
            {children}
        </Typography>
    );
};

export default BoldText;
