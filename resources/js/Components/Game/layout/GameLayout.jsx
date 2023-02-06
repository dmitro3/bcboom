import React from "react";
import { styled } from "@mui/system";
import keyboard from "../../../../assets/games/Keyboard.svg";
import volume from "../../../../assets/games/Volume.svg";
import help from "../../../../assets/games/help.svg";
import activity from "../../../../assets/games/Activity.svg";
import { Box, Typography } from "@mui/material";
import GameTab from "@/Components/Game/tab/GameTab";
import GameTable from "@/Components/Game/table/GameTable";
import { useScreenResolution } from "@/hooks/useScreeResolution";

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
    customFrameBoxStyles,
    customFrameHeader = false,
    innerHeader = false,
    GameBg,
}) => {
    const { isMobile } = useScreenResolution();
    return (
        <div>
            <Box
                sx={{
                    width: `${isMobile ? "6rem" : "9rem"}`,
                    height: `${isMobile ? "5.1875rem" : "7.1875rem"}`,
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
                    mt: ".1875rem",

                    //px: ".3rem",
                }}
            >
                <Typography
                    sx={{
                        fontFamily: "GROBOLD, montserrat",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: `${isMobile ? "1rem" : "1.5rem"}`,
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
                        width: { xs: "100%", md: "65%" },
                        display: "flex",
                        paddingRight: "1rem",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            height: "1.5rem",
                            width: "100%",
                            //display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            display: {
                                xs: `${customFrameHeader ? "flex" : "none"}`,
                                md: "none",
                            },
                            mt: "-1.5rem",
                            mb: ".5rem",
                        }}
                    >
                        <Box
                            sx={{
                                display: `${isMobile ? "flex" : "none"}`,
                                width: "34%",
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
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: ".625rem",
                            flexDirection: "column",
                            background: "#2E3565",
                            // background: "red",
                            padding: `${customFrameHeader ? 0 : "1.12rem"}`,

                            ...customFrameStyles,
                        }}
                    >
                        {/* {GameBg && GameBg} */}
                        <Box
                            sx={{
                                height: "1.5rem",
                                width: "100%",
                                //display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                display: {
                                    xs: `${!innerHeader ? "none" : "none"}`,
                                    md: `${!innerHeader ? "none" : "flex"}`,
                                },
                                zIndex: 1000,
                                position: "relative",
                                //border: "1px solid red",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    width: "20%",
                                    mt: "1rem",
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
                                display: "flex",
                                justifyContent: "center",
                                zIndex: 100,
                                ...customFrameBoxStyles,
                            }}
                        >
                            {GameFrame ? GameFrame : null}
                        </Box>
                    </Box>
                    {ButtonGrid ? ButtonGrid : null}
                    {displayPanel && <GameTab />}
                </Box>

                <Box
                    sx={{
                        width: "35%",
                        display: { xs: "none", md: "flex" },
                        zIndex: 100,
                    }}
                >
                    <GameTable />
                </Box>
            </Box>
        </div>
    );
};

export default GameLayout;
