import React from "react";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
import dice from "../../../../assets/games/dice.svg";
import cross from "../../../../assets/games/cross.svg";
import arrow from "../../../../assets/games/arrow.svg";

const marks = [0, 25, 50, 75, 100];

const Frame = styled("img")(() => ({
    width: "4.1875rem",
    height: "4.1875rem",
}));

const PrettoSlider = styled(Slider)({
    color: "red",
    height: 8,
    "& .MuiSlider-track": {
        border: "none",
        color: "#3586FF",
    },
    "& .MuiSlider-thumb": {
        height: 24,
        width: 24,
        backgroundColor: "#fff",
        border: "2px solid currentColor",
        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "inherit",
        },
        "&:before": {
            display: "none",
        },
    },
    "& .MuiSlider-valueLabel": {
        lineHeight: 1.2,
        fontSize: 12,
        background: "unset",
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: "50% 50% 50% 0",
        backgroundColor: "#3586FF",
        transformOrigin: "bottom left",
        transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
        "&:before": { display: "none" },
        "&.MuiSlider-valueLabelOpen": {
            transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
        },
        "& > *": {
            transform: "rotate(45deg)",
        },
    },
});

const DiceFrame = () => {
    return (
        <Box sx={{ width: "98%", mt: ".625rem" }}>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Frame src={dice} />
            </Box>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: "1.5625rem",
                }}
            >
                <Box
                    sx={{
                        background: "#131839",
                        borderRadius: "1.875rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "3rem",
                        width: "100%",
                        paddingLeft: "2.6875rem",
                        paddingRight: "2.6875rem",
                    }}
                >
                    <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={50}
                    />
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "1.375rem",
                    paddingTop: "1rem",
                    //paddingLeft: "2.6875rem",
                    //paddingRight: "2.6875rem",
                }}
            >
                {marks.map((mark, idx) => {
                    return (
                        <Box
                            sx={{
                                width: "20%",
                                display: "flex",
                                fontSize: "1.125rem",
                                fontWeight: 700,
                                color: "white",
                                alignItems: "center",
                                justifyContent: `${idx === 0 ? "" : "center"}`,
                                pl: `${idx === 0 ? "2.5rem" : 0}`,
                            }}
                        >
                            {mark}
                        </Box>
                    );
                })}
            </Box>
            <Box
                sx={{
                    height: "6rem",
                    width: "100%",
                    mt: "3.125rem",
                    pl: "1.4375rem",
                    pr: "1.4375rem",
                    display: "flex",
                    justifyContent: "space-between",
                    borderRadius: ".625rem",
                    background: "#272C4B",
                    px: "1.0625rem",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        width: "28%",
                        height: "88%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography
                        sx={{
                            color: "white",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                        }}
                    >
                        Payout
                    </Typography>
                    <Box
                        sx={{
                            height: "3.5rem",
                            borderRadius: ".625rem",
                            background: "#333965",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: ".625rem",
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: ".875rem",
                                }}
                            >
                                1.98x
                            </Typography>
                            <img src={cross} />
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: "28%",
                        height: "88%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography
                        sx={{
                            color: "white",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                        }}
                    >
                        Roll Under
                    </Typography>
                    <Box
                        sx={{
                            height: "3.5rem",
                            borderRadius: ".625rem",
                            background: "#333965",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: ".625rem",
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: ".875rem",
                                }}
                            >
                                51.00
                            </Typography>
                            <img src={arrow} />
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: "38%",
                        height: "88%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography
                        sx={{
                            color: "white",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                        }}
                    >
                        Win Chance
                    </Typography>
                    <Box
                        sx={{
                            height: "3.5rem",
                            borderRadius: ".625rem",
                            background: "#333965",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: ".625rem",
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: ".875rem",
                                }}
                            >
                                51
                                <Box
                                    component={"span"}
                                    sx={{ color: "#3586FF" }}
                                >
                                    %
                                </Box>
                            </Typography>
                            <Box
                                sx={{
                                    height: "1.625rem",
                                    width: "9.4375rem",
                                    background: "#535D9D",
                                    borderRadius: "0.8125rem",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Box
                                    sx={{
                                        height: "100%",
                                        width: "95%",
                                        display: "flex",
                                    }}
                                >
                                    {["Min", "-5", "+5", "Max"].map(
                                        (item, idx) => {
                                            return (
                                                <Box
                                                    sx={{
                                                        width: "25%",
                                                        cursor: "pointer",
                                                        color: "#A6B0DA",
                                                        fontWeight: 700,
                                                        fontSize: ".75rem",
                                                        textAlign: "center",
                                                        display: "flex",
                                                        justifyContent:
                                                            "center",
                                                        alignItems: "center",
                                                        borderRight: `${
                                                            idx !== 3
                                                                ? "2px solid #2E3365"
                                                                : ""
                                                        }`,
                                                    }}
                                                >
                                                    {item}
                                                </Box>
                                            );
                                        }
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default DiceFrame;
