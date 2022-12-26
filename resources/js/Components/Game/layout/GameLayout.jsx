import React from "react";
import { styled } from "@mui/system";
import keyboard from "../../../../assets/games/Keyboard.svg";
import volume from "../../../../assets/games/Volume.svg";
import help from "../../../../assets/games/help.svg";
import activity from "../../../../assets/games/Activity.svg";
import { Box, Typography } from "@mui/material";
import GameTab from "@/Components/Game/tab/GameTab";
import GameTable from "@/Components/Game/table/GameTable";

const GameFrameHeaderIconContainer = styled("div")(() => ({
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    padding: ".1875rem, 0.0625rem",
}));

const GameFrameHeaderIcon = styled("img")(() => ({
    cursor: "pointer",
}));

const GameLayout = ({
    GameFrame,
    ButtonGrid,
    GameFrameText,
    displayPanel = true,
    customFrameStyles,
}) => {
    return (
        <div>
            <Box
                sx={{
                    width: "9rem",
                    height: "7.1875rem",
                    borderTopLeftRadius: "0.625rem",
                    background:
                        "linear-gradient(103.93deg, #337CFF 3.76%, #154BB2 71.62%)",
                    clipPath: "polygon(0 0, 100% 7%, 93% 36%, 0 42%)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transform: "translateY(-20%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    //px: ".3rem",
                }}
            >
                <Typography
                    sx={{
                        fontFamily: "GROBOLD, montserrat",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "1.5rem",
                        position: "absolute",

                        top: "4px",
                        left: "1rem",
                    }}
                >
                    {GameFrameText}
                </Typography>
            </Box>
            <Box
                sx={{
                    width: "8rem",
                    height: "7.1875rem",
                    borderTopLeftRadius: "0.625rem",
                    background:
                        "linear-gradient(103.93deg, #337CFF 3.76%, #154BB2 71.62%)",
                    clipPath: "polygon(0 0, 100% 7%, 93% 36%, 0 42%)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transform: "translateY(-20%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <Typography
                    sx={{
                        fontFamily: "GROBOLD, montserrat",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "1.5rem",
                        position: "absolute",
                        top: "4px",
                        left: "1rem",
                    }}
                >
                    {GameFrameText}
                </Typography>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Box
                    sx={{
                        width: "65%",
                        display: "flex",
                        padding: "1rem",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: ".625rem",
                            flexDirection: "column",
                            background: "#2E3565",
                            padding: "1.12rem",
                            ...customFrameStyles,
                        }}
                    >
                        <Box
                            sx={{
                                height: "1.5rem",
                                width: "100%",
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    width: "18%",
                                }}
                            >
                                <GameFrameHeaderIconContainer>
                                    <GameFrameHeaderIcon src={keyboard} />
                                </GameFrameHeaderIconContainer>
                                <GameFrameHeaderIconContainer>
                                    <GameFrameHeaderIcon src={activity} />
                                </GameFrameHeaderIconContainer>
                                <GameFrameHeaderIconContainer>
                                    <GameFrameHeaderIcon src={help} />
                                </GameFrameHeaderIconContainer>
                                <GameFrameHeaderIconContainer>
                                    <GameFrameHeaderIcon src={volume} />
                                </GameFrameHeaderIconContainer>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                            }}
                        >
                            {GameFrame ? GameFrame() : null}
                        </Box>
                    </Box>
                    {ButtonGrid ? ButtonGrid() : null}
                    {displayPanel && <GameTab />}
                </Box>

                <Box
                    sx={{
                        width: "35%",
                        display: "flex",
                        paddingTop: "1rem",
                    }}
                >
                    <GameTable />
                </Box>
            </Box>
        </div>
    );
};

export default GameLayout;
