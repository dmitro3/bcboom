import { useScreenResolution } from "@/hooks/useScreeResolution";
import { setGameData } from "@/redux/game/game-slice";
import { toggleRollUnder } from "@/utils/util";
import { Box, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import arrow from "../../../../assets/games/arrow.svg";
import cross from "../../../../assets/games/cross.svg";
import cross_sm from "../../../../assets/games/cross_sm.svg";
import DiceComponent from "../styles/dice";
// import { sleep } from "@/utils/util";

const marks = [0, 25, 50, 75, 100];

// const Frame = styled("img")(({ rotate }) => ({
//     width: "4.1875rem",
//     height: "4.1875rem",
//     transform: `rotate(${rotate}deg)`,
// }));

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

const DiceFrame = ({ setPlaying, setDiceNumbers }) => {
    const { isMobile } = useScreenResolution();
    const { gameData, playing } = useSelector((state) => state.game);
    const dispatch = useDispatch();
    return (
        <Box
            sx={{
                width: "98%",
                mt: ".625rem",
                px: { xs: "1.25rem", md: 0 },
            }}
        >
            <DiceComponent
                setPlaying={setPlaying}
                setDiceNumbers={setDiceNumbers}
            />
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
                        value={gameData.winChance}
                        disabled={playing}
                        min={3}
                        max={96}
                        onChange={(_, value) => {
                            dispatch(
                                setGameData({
                                    ...gameData,
                                    winChance: value,
                                    // payout,
                                })
                            );
                        }}
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
                            key={idx}
                        >
                            {mark}
                        </Box>
                    );
                })}
            </Box>
            {!isMobile ? (
                <>
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
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: ".875rem",
                                        }}
                                    >
                                        {gameData.payout.toFixed(4)}
                                    </Typography>
                                    <div
                                        onClick={() => {
                                            if (playing) return;
                                            dispatch(
                                                setGameData({
                                                    ...gameData,
                                                    payout: (0.5).toFixed(4),
                                                })
                                            );
                                        }}
                                    >
                                        <img
                                            src={cross}
                                            style={{ cursor: "pointer" }}
                                        />
                                    </div>
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
                                        {gameData.rollUnder.value}
                                    </Typography>
                                    <div
                                        onClick={() => {
                                            if (playing) return;
                                            toggleRollUnder(
                                                gameData,
                                                dispatch,
                                                setGameData
                                            );
                                        }}
                                    >
                                        <img
                                            src={arrow}
                                            style={{ cursor: "pointer" }}
                                        />
                                    </div>
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
                                        {gameData.winChance}
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
                                            {[
                                                {
                                                    name: "Min",
                                                    value: "-95",
                                                },
                                                {
                                                    name: "-5",
                                                    value: "-5",
                                                },
                                                {
                                                    name: "+5",
                                                    value: "+5",
                                                },
                                                {
                                                    name: "Max",
                                                    value: "+95",
                                                },
                                            ].map((item, idx) => {
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
                                                            alignItems:
                                                                "center",
                                                            borderRight: `${
                                                                idx !== 3
                                                                    ? "2px solid #2E3365"
                                                                    : ""
                                                            }`,
                                                        }}
                                                        key={idx}
                                                        onClick={() => {
                                                            if (playing) return;
                                                            let newValue =
                                                                gameData.winChance +
                                                                Number(
                                                                    item.value
                                                                );
                                                            if (newValue < 5) {
                                                                newValue = 5;
                                                            } else if (
                                                                newValue > 95
                                                            ) {
                                                                newValue = 95;
                                                            }
                                                            dispatch(
                                                                setGameData({
                                                                    ...gameData,
                                                                    winChance:
                                                                        newValue,
                                                                })
                                                            );
                                                        }}
                                                    >
                                                        {item.name}
                                                    </Box>
                                                );
                                            })}
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </>
            ) : (
                <>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mt: "1.625rem",
                            mb: "1rem",
                        }}
                    >
                        <Box
                            sx={{
                                width: "45%",
                                display: "flex",
                                flexDirection: "column",
                                height: "3.5rem",
                                justifyContent: "space-between",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: "0.75rem",
                                    color: "white",
                                }}
                            >
                                Payout
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "2rem",
                                    backgroundColor: "#131839",
                                    borderRadius: ".625rem",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        width: "90%",
                                        height: "1.8rem",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: "white",
                                            fontSize: ".625rem",
                                            weight: "700",
                                        }}
                                    >
                                        {gameData.payout}
                                    </Typography>
                                    <div
                                        onClick={() => {
                                            if (playing) return;
                                            dispatch(
                                                setGameData({
                                                    ...gameData,
                                                    payout: (0.5).toFixed(4),
                                                })
                                            );
                                        }}
                                    >
                                        <img
                                            src={cross_sm}
                                            style={{
                                                width: ".625rem",
                                                height: ".625rem",
                                            }}
                                        />
                                    </div>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                width: "45%",

                                display: "flex",
                                flexDirection: "column",
                                height: "3.5rem",
                                justifyContent: "space-between",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: "0.75rem",
                                    color: "white",
                                }}
                            >
                                Roll Under
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "100%",
                                    height: "2rem",
                                    backgroundColor: "#131839",
                                    borderRadius: ".625rem",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        width: "90%",
                                        height: "1.8rem",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: "#A6B0DA",
                                            fontSize: ".625rem",
                                            weight: "700",
                                        }}
                                    >
                                        {gameData.rollUnder.value}
                                    </Typography>
                                    <div
                                        onClick={() => {
                                            if (playing) return;
                                            toggleRollUnder(
                                                gameData,
                                                dispatch,
                                                setGameData
                                            );
                                        }}
                                    >
                                        <img
                                            src={arrow}
                                            style={{
                                                width: ".625rem",
                                                height: ".625rem",
                                            }}
                                        />
                                    </div>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",

                            display: "flex",
                            flexDirection: "column",
                            height: "3.5rem",
                            justifyContent: "space-between",
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: "0.75rem",
                                color: "white",
                            }}
                        >
                            Win Chances
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                height: "2rem",
                                backgroundColor: "#131839",
                                borderRadius: ".625rem",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    width: "95%",
                                    height: "1.8rem",
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "white",
                                        fontSize: ".625rem",
                                        weight: "700",
                                    }}
                                >
                                    {gameData.winChance}
                                    <Box
                                        component="span"
                                        sx={{
                                            color: "#3586FF",
                                            fontSize: ".625rem",
                                            weight: "700",
                                        }}
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
                                        {[
                                            {
                                                name: "Min",
                                                value: "-95",
                                            },
                                            {
                                                name: "-5",
                                                value: "-5",
                                            },
                                            {
                                                name: "+5",
                                                value: "+5",
                                            },
                                            {
                                                name: "Max",
                                                value: "+95",
                                            },
                                        ].map((item, idx) => {
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
                                                    key={idx}
                                                    onClick={() => {
                                                        if (playing) return;
                                                        let newValue =
                                                            gameData.winChance +
                                                            Number(item.value);
                                                        if (newValue < 5) {
                                                            newValue = 5;
                                                        } else if (
                                                            newValue > 95
                                                        ) {
                                                            newValue = 95;
                                                        }
                                                        dispatch(
                                                            setGameData({
                                                                ...gameData,
                                                                winChance:
                                                                    newValue,
                                                            })
                                                        );
                                                    }}
                                                >
                                                    {item.name}
                                                </Box>
                                            );
                                        })}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </>
            )}
        </Box>
    );
};

export default DiceFrame;
