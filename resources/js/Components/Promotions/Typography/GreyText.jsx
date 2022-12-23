import { Typography } from "@mui/material";
import React from "react";

const GreyText = ({ align, customStyles, children }) => {
    return (
        <Typography
            sx={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "1rem",
                color: "#A7B0D6",
                textAlign: `${align ? align : "center"}`,
                ...customStyles,
            }}
        >
            {children}
        </Typography>
    );
};

export default GreyText;
