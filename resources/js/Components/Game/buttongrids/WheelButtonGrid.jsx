import { Box, Button } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import WheelSwitchBox from "@/Components/Gridbox/WheelSwitchBox";

const wheelBoxData = [
    {
        firstAmount: 1,
        secondAmount: 0,
        checked: true,
    },
    {
        firstAmount: 1,
        secondAmount: 0,
        checked: true,
    },
    {
        firstAmount: 1,
        secondAmount: 0,
        checked: false,
    },
    {
        firstAmount: 1,
        secondAmount: 0,
        checked: false,
    },
];

const WheelButtonGrid = () => {
    return (
        <Box
            sx={{
                width: "100%",
                mt: "0.6875rem",
            }}
        >
            <Grid container spacing={2}>
                {wheelBoxData.map((item, idx) => {
                    return (
                        <Grid key={idx} item xs={3}>
                            <Box
                                sx={{
                                    width: "100%",
                                    height: "5.125rem",
                                    borderRadius: "0.625rem",
                                    background: "#333965",
                                    padding: ".4125rem",
                                }}
                            >
                                <WheelSwitchBox
                                    firstAmount={item.firstAmount}
                                    secondAmount={item.secondAmount}
                                    checked={item.checked}
                                />
                            </Box>
                        </Grid>
                    );
                })}
                {new Array(4).fill(0).map((item, idx) => {
                    return (
                        <Grid item container spacing={1} xs={3}>
                            <Grid item xs={4}>
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "1.625rem",
                                        borderRadius: "0.3125rem",
                                        background: "#333965",
                                        padding: ".4125rem",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        color: "white",
                                        fontSize: ".75rem",
                                        fontWeight: 800,
                                        cursor: "pointer",
                                    }}
                                >
                                    2/
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "1.625rem",
                                        borderRadius: "0.3125rem",
                                        background: "#333965",
                                        padding: ".4125rem",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        color: "white",
                                        fontSize: ".75rem",
                                        fontWeight: 800,
                                        cursor: "pointer",
                                    }}
                                >
                                    2x
                                </Box>
                            </Grid>
                            <Grid item xs={4}>
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "1.625rem",
                                        borderRadius: "0.3125rem",
                                        background: "#333965",
                                        padding: ".4125rem",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        color: "white",
                                        fontSize: ".75rem",
                                        fontWeight: 800,
                                        cursor: "pointer",
                                    }}
                                >
                                    Max
                                </Box>
                            </Grid>
                        </Grid>
                    );
                })}

                <Grid item xs={3}>
                    <Button
                        sx={{
                            width: "100%",
                            height: "4rem",
                            backgroundColor: "#3981FD",
                            color: "white",
                            fontWeight: 600,
                            fontSize: "1.125rem",
                            borderRadius: ".625rem",
                        }}
                    >
                        Start Auto
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        sx={{
                            width: "100%",
                            height: "4rem",
                            backgroundColor: "#43BB41",
                            color: "white",
                            fontWeight: 600,
                            fontSize: "1.125rem",
                            borderRadius: ".625rem",
                        }}
                    >
                        Start Auto
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        sx={{
                            width: "100%",
                            height: "4rem",
                            backgroundColor: "#43BB41",
                            color: "white",
                            fontWeight: 600,
                            fontSize: "1.125rem",
                            borderRadius: ".625rem",
                        }}
                    >
                        5X
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        sx={{
                            width: "100%",
                            height: "4rem",
                            backgroundColor: "#FF485E",
                            color: "white",
                            fontWeight: 600,
                            fontSize: "1.125rem",
                            borderRadius: ".625rem",
                        }}
                    >
                        5X
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default WheelButtonGrid;
