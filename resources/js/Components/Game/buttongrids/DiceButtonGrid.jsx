import React from "react";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setGameIsOn } from "@/redux/game/game-slice";
import { sleep } from "@/utils/util";

const DiceButtonGrid = ({ playDeter }) => {
    const dispatch = useDispatch();
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
                    width: { xs: "59%", md: "49%" },
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
                    width: { xs: "39%", md: "49%" },
                    height: "4rem",
                    borderRadius: "0.625rem",
                    background: !playDeter
                        ? "rgba(82, 90, 160, 0.04)"
                        : "#3585ff",
                    fontSize: "1.375rem",
                    fontWeight: 800,
                    color: "#FFFFFF",
                }}
                onClick={async () => {
                    if (!playDeter) return;
                    dispatch(setGameIsOn(true));
                }}
            >
                {!playDeter ? "..." : "Play"}
            </Button>
        </Box>
    );
};

export default DiceButtonGrid;
