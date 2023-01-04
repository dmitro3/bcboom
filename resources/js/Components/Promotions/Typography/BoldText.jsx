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
<<<<<<< HEAD
                    xs: "1.5rem",
                    sm: "2rem",
=======
                    xs: "1.25rem",
                    sm: "1.25rem",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
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
