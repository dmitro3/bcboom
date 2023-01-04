import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ellipseUp from "../../../../assets/games/ellipseUp.svg";
import ellipseDown from "../../../../assets/games/ellipseDown.svg";

const PlinkoButtonGrid = () => {
    return (
        <Box
            sx={{
                width: "100%",
                mt: "0.6875rem",
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    {" "}
                    <Button
                        endIcon={<ExpandMoreIcon sx={{ fontSize: "1rem" }} />}
                        sx={{
                            width: "100%",
                            height: "3.5rem",
                            borderRadius: "0.625rem",
                            background: "#333965",
                            fontSize: { xs: ".75rem", md: ".875rem" },
                            fontWeight: 800,
                            backgroundColor: "#333965",
                            color: "#A6B0DA",
                            display: "flex",
                            justifyContent: "space-between",
                            textTransform: "none",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-start",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: { xs: ".75rem", md: ".875rem" },
                                    fontWeight: 800,
                                    color: "#A6B0DA",
                                    mr: ".3rem",
                                }}
                            >
                                Risk:
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: ".75rem", md: ".875rem" },
                                    fontWeight: 800,
                                    color: "white",
                                }}
                            >
                                Low
                            </Typography>
                        </Box>
                    </Button>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#333965",
                            height: "3.5rem",
                            borderRadius: ".625rem",
                        }}
                    >
                        <Box
                            sx={{
                                width: {
                                    xs: "90%",
                                    md: "80%",
                                },
                                display: "flex",
                                justifyContent: "space-between",
                                height: "100%",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "20%",
                                    cursor: "pointer",
                                    height: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <img src={ellipseUp} />
                            </Box>
                            <Box
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    width: "50%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "80%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: ".875rem",
                                            color: "#A6B0DA",
                                            fontWeight: 800,
                                        }}
                                    >
                                        Rows
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: ".875rem",
                                            color: "white",
                                            fontWeight: 800,
                                        }}
                                    >
                                        11
                                    </Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    width: "20%",
                                    cursor: "pointer",
                                    height: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <img src={ellipseDown} />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={8} md={6}>
                    <Box
                        sx={{
                            width: "100%",
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
                                        fontSize: { xs: ".875rem", md: "1rem" },
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
                </Grid>
                <Grid item xs={4} md={6}>
                    <Button
                        sx={{
                            width: "100%",
                            height: "4rem",
                            borderRadius: "0.625rem",
                            background: "#333965",
                            fontSize: { xs: "1rem", md: "1.375rem" },
                            fontWeight: 800,
                            backgroundColor: "#3585ff",
                            color: "#FFFFFF",
                        }}
                    >
                        BET
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PlinkoButtonGrid;
