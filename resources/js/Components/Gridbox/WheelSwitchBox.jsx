import { Box, Typography } from "@mui/material";
import React from "react";
import { Switch } from "antd";

const WheelSwitchBox = ({ firstAmount, secondAmount, checked }) => {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    width: "90%",
<<<<<<< HEAD
=======
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                }}
            >
                <Typography
                    sx={{
                        width: "100%",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
<<<<<<< HEAD
                        fontSize: "1rem",
=======
                        fontSize: { xs: ".8rem", md: "1rem" },
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                        fontWeight: 800,
                    }}
                >
                    R${firstAmount}
                </Typography>
                <Typography
                    sx={{
                        width: "100%",
                        textAlign: "center",
<<<<<<< HEAD
                        display: "flex",
                        justifyContent: "center",
                        fontSize: ".75rem",
=======
                        display: { xs: "none", md: "flex" },
                        justifyContent: "center",
                        fontSize: { xs: ".65rem", md: ".75rem" },
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                        fontWeight: 800,
                        color: "#A6B0DA",
                    }}
                >
                    R${secondAmount}
                </Typography>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: ".375rem",
                    }}
                >
                    <Typography
                        sx={{
<<<<<<< HEAD
                            fontSize: ".75rem",
=======
                            fontSize: { xs: ".65rem", md: ".75rem" },
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                            fontWeight: 800,
                            color: "#A6B0DA",
                            mr: ".3rem",
                        }}
                    >
                        Auto
                    </Typography>
                    <Switch
                        size="large"
                        //checked={checked}
                        defaultChecked
                        inputProps={{ "aria-label": "ant design" }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default WheelSwitchBox;
