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
                }}
            >
                <Typography
                    sx={{
                        width: "100%",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "1rem",
                        fontWeight: 800,
                    }}
                >
                    R${firstAmount}
                </Typography>
                <Typography
                    sx={{
                        width: "100%",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        fontSize: ".75rem",
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
                            fontSize: ".75rem",
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
