import { Typography } from "@mui/material";
import React from "react";

const SemiBoldText = ({ customStyles, weight, children }) => {
    return (
        <Typography
            sx={{
                fontFamily: "Montserrat",
                fontStyle: "normal",
                fontWeight: `${weight ? weight : 900}`,
                fontSize: "1.5rem",
                color: "white",
                ...customStyles,
            }}
        >
            {children}
        </Typography>
    );
};

export default SemiBoldText;
