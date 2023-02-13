import React from "react";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setGameData, setGameIsOn } from "@/redux/game/game-slice";
import { sleep } from "@/utils/util";

const DiceButtonGrid = ({ playDeter }) => {
    const dispatch = useDispatch();
    const { wallet } = useSelector((state) => state.wallet);
    const { gameData, playing } = useSelector((state) => state.game);
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
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                dispatch(
                                    setGameData({
                                        ...gameData,
                                        betAmount: (0.0001).toFixed(4),
                                    })
                                );
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
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                dispatch(
                                    setGameData({
                                        ...gameData,
                                        betAmount: (200.0).toFixed(4),
                                    })
                                );
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
                            R$ {gameData.betAmount}
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
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                let newValue = (gameData.betAmount / 2).toFixed(
                                    4
                                );
                                if (newValue < 0.0001) {
                                    newValue = 0.0001;
                                } else if (newValue > 200.0) {
                                    newValue = (200.0).toFixed(4);
                                }
                                dispatch(
                                    setGameData({
                                        ...gameData,
                                        betAmount: newValue,
                                    })
                                );
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
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                let newValue = (gameData.betAmount * 2).toFixed(
                                    4
                                );
                                if (newValue < 0.0001) {
                                    newValue = 0.0001;
                                } else if (newValue > 200.0) {
                                    newValue = (200.0).toFixed(4);
                                }
                                dispatch(
                                    setGameData({
                                        ...gameData,
                                        betAmount: newValue,
                                    })
                                );
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
                    background: playing ? "rgba(82, 90, 160, 0.04)" : "#3585ff",
                    fontSize: "1.375rem",
                    fontWeight: 800,
                    color: "#FFFFFF",
                }}
                onClick={async () => {
                    if (playing) return;
                    dispatch(setGameIsOn(true));
                }}
            >
                {playing ? "..." : "Play"}
            </Button>
        </Box>
    );
};

export default DiceButtonGrid;
