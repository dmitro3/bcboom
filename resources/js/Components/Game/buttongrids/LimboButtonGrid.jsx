import React from "react";
import { Box, Button } from "@mui/material";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import { Grid } from "@mui/material";

const LimboButtonGrid = () => {
    const { isMobile } = useScreenResolution();
    return (
        <>
            {!isMobile ? (
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "1.375rem",
                        flexWrap: "wrap",
                    }}
                >
                    <Box
                        sx={{
                            width: "32.5%",
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
                    <Box
                        sx={{
                            width: "32.5%",
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
                                    justifyContent: "center",
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
                                    -
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    width: "65%",
                                    height: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                }}
                            >
                                <Box
                                    sx={{
                                        fontSize: ".875rem",
                                        fontWeight: 800,
                                        textAlign: "center",
                                    }}
                                >
                                    1.00
                                </Box>
                                <Box
                                    sx={{
                                        fontSize: ".875rem",
                                        fontWeight: 800,
                                        textAlign: "center",
                                        color: "#A6B0DA",
                                    }}
                                >
                                    CASHOUT AT
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    width: "15%",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
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
                                    +
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Button
                        sx={{
                            width: "32.5%",
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
                </Box>
            ) : (
                <Box
                    sx={{
                        width: "100%",
                        marginTop: "1.375rem",
                    }}
                >
                    <Grid
                        container
                        spacing={2}
                        sx={{ marginBottom: "1.375rem" }}
                    >
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    display: "flex",
                                    width: "100%",
                                    height: "4.125rem",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: ".625rem",
                                    background: "#333965",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        width: "100%",
                                        height: "98%",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "space-around",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                fontSize: "1.14rem",
                                                fontWeight: 800,
                                                textAlign: "left",
                                                color: "#A6B0DA",
                                                width: "50%",
                                                height: "100%",
                                            }}
                                        >
                                            CASHOUT AT
                                        </Box>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                width: { xs: "40%", sm: "20%" },
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    height: "1.5625rem",
                                                    background: "#535D9D",
                                                    borderRadius: "0.3125rem",
                                                    width: "1.5625rem",
                                                    color: "#A6B0DA",
                                                    fontSize: "0.75rem",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    textAlign: "center",
                                                }}
                                            >
                                                -
                                            </Box>
                                            <Box
                                                sx={{
                                                    fontSize: "1.14rem",
                                                    fontWeight: 800,
                                                    textAlign: "center",
                                                }}
                                            >
                                                1.00
                                            </Box>
                                            <Box
                                                sx={{
                                                    height: "1.5625rem",
                                                    background: "#535D9D",
                                                    borderRadius: "0.3125rem",
                                                    width: "1.5625rem",
                                                    color: "#A6B0DA",
                                                    fontSize: "0.75rem",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    textAlign: "center",
                                                }}
                                            >
                                                +
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={8}>
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
                        </Grid>
                        <Grid item xs={4}>
                            <Button
                                sx={{
                                    width: "100%",
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
                        </Grid>
                    </Grid>
                </Box>
            )}
        </>
    );
};

export default LimboButtonGrid;
