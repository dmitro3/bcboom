import React from "react";
import { Box, Button } from "@mui/material";

const DiceButtonGrid = () => {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "1.375rem",
            }}
        >
            <Box
                sx={{
                    width: "49%",
                    height: "4rem",
                    borderRadius: "0.625rem",
                    background: "#333965",
                    padding: ".4125rem",
                }}
            >
                <Box
                    sx={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignContent: "center",
                    }}
                >
                    <Box
                        sx={{
                            width: "15%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box
                            sx={{
                                height: "46%",
                                background: "#535D9D",
                                borderRadius: "0.3125rem",
                                width: "100%",
                                color: "#A6B0DA",
                                fontSize: "0.75rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                            }}
                        >
                            Min
                        </Box>
                        <Box
                            sx={{
                                height: "46%",
                                background: "#535D9D",
                                borderRadius: "0.3125rem",
                                width: "100%",
                                color: "#A6B0DA",
                                fontSize: "0.75rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                            }}
                        >
                            Max
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: "65%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                fontSize: "1rem",
                                fontWeight: 800,
                                textAlign: "center",
                            }}
                        >
                            R$ 0.0000000
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: "15%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box
                            sx={{
                                height: "46%",
                                background: "#535D9D",
                                borderRadius: "0.3125rem",
                                width: "100%",
                                color: "#A6B0DA",
                                fontSize: "0.75rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                            }}
                        >
                            1/2
                        </Box>
                        <Box
                            sx={{
                                height: "46%",
                                background: "#535D9D",
                                borderRadius: "0.3125rem",
                                width: "100%",
                                color: "#A6B0DA",
                                fontSize: "0.75rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                            }}
                        >
                            2x
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Button
                sx={{
                    width: "49%",
                    height: "4rem",
                    borderRadius: "0.625rem",
                    background: "#333965",
                    fontSize: "1.375rem",
                    fontWeight: 800,
                    backgroundColor: "#3585ff",
                    color: "#FFFFFF",
                }}
            >
                BET
            </Button>
        </Box>
    );
};

export default DiceButtonGrid;
