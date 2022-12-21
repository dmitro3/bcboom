import React from "react";
import { Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setGameData, setGameIsOn } from "@/redux/game/game-slice";
import { sleep } from "@/utils/util";
import { setAuthModalState } from "@/redux/auth/auth-slice";
import { toast } from "react-toastify";
import { setSound } from "@/redux/app-state/app-slice";
import useSound from "use-sound";
import BetSound from "../../../../../public/sounds/bet.mp3";
const DiceButtonGrid = ({ playDeter }) => {
    const dispatch = useDispatch();
    const { wallet } = useSelector((state) => state.wallet);
    const { gameData, playing } = useSelector((state) => state.game);
    const { user } = useSelector((state) => state.auth);
    const [play, { stop, isPlaying }] = useSound(BetSound, {
        volume: 1,
    });

    function userCanPlay() {
        if (playing) return false;
        if (!user?.user) {
            toast.error("You must be logged in to play.");
            dispatch(
                setAuthModalState({
                    open: true,
                    tab: 0,
                })
            );
            return false;
        }
        // if()
        if (+wallet.withdrawable_balance < +gameData.betAmount) {
            toast.error("Insufficient funds to play.", {
                position: "top-center",
            });
            return false;
        }
        if (+gameData.betAmount < 0.4) {
            toast.error("Bet amount must be at least 0.4000.", {
                position: "top-center",
            });
            return false;
        }
        let differenceInChance = gameData.rollUnder.value.split(" - ");
        differenceInChance = Math.abs(
            differenceInChance[1] - differenceInChance[0]
        );
        if (differenceInChance < 3) {
            toast.error("Roll under must be at least 3 numbers apart.", {
                position: "top-center",
            });
            return false;
        }
        return true;
    }

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
                                if (newValue < 0.5) {
                                    newValue = (0.5).toFixed(4);
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
                                if (newValue < 0.5) {
                                    newValue = 0.5;
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
                    if (userCanPlay()) {
                        // play();
                        dispatch(
                            setSound({
                                field: "currentSound",
                                value: "/sounds/bet.mp3",
                            })
                        );
                        dispatch(setGameIsOn(true));
                    }
                }}
            >
                {playing ? "..." : "Play"}
            </Button>
        </Box>
    );
};

export default DiceButtonGrid;
