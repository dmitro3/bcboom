import React from "react";
<<<<<<< HEAD
import { Box, Button } from "@mui/material";

const DinosaurButtonGrids = () => {
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
=======
import { Box, Button, Typography, Grid } from "@mui/material";
import { useScreenResolution } from "@/hooks/useScreeResolution";

const DinosaurButtonGrids = () => {
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
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                    }}
                >
                    <Box
                        sx={{
<<<<<<< HEAD
                            width: "15%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
=======
                            width: "32.5%",
                            height: "4rem",
                            borderRadius: "0.625rem",
                            background: "#333965",
                            padding: ".4125rem",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                        }}
                    >
                        <Box
                            sx={{
<<<<<<< HEAD
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
=======
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
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                        </Box>
                    </Box>
                    <Box
                        sx={{
<<<<<<< HEAD
                            width: "65%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
=======
                            width: "32.5%",
                            height: "4rem",
                            borderRadius: "0.625rem",
                            background: "#333965",
                            padding: ".4125rem",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                        }}
                    >
                        <Box
                            sx={{
<<<<<<< HEAD
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
=======
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
                            fontSize: "1.375rem",
                            fontWeight: 800,
                            backgroundColor: "#3585ff",
                            color: "#FFFFFF",
                        }}
                    >
                        BET
                    </Button>
                </Box>
            ) : (
                <>
                    <Box
                        sx={{
                            width: "100%",
                            mt: "0.9375rem",
                            mb: "0.9375rem",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                        }}
                    >
                        <Box
                            sx={{
<<<<<<< HEAD
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
                    fontSize: "1.375rem",
                    fontWeight: 800,
                    backgroundColor: "#3585ff",
                    color: "#FFFFFF",
                }}
            >
                BET
            </Button>
        </Box>
=======
                                width: "100%",
                                backgroundColor: "#333965",
                                height: "3.0625rem",
                                borderRadius: "0.625rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    height: "100%",
                                    width: "90%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Box
                                    sx={{
                                        height: "100%",
                                        width: "50%",
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        textAlign: "center",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: "#90A3C7",
                                            fontSize: "0.875rem",
                                            textTransform: "uppercase",
                                            fontWeight: "800",
                                        }}
                                    >
                                        CASHOUT AT
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        height: "100%",
                                        width: "50%",
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-around",
                                            alignItems: "center",
                                            width: "100%",
                                            height: "1.5625rem",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                height: "100%",
                                                width: "1.5625rem",
                                                borderRadius: "0.3125rem",
                                                backgroundColor: "#535D9D",
                                                textAlign: "center",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                color: "white",
                                                cursor: "pointer",
                                            }}
                                        >
                                            -
                                        </Box>
                                        <Box
                                            sx={{
                                                height: "100%",
                                                //width: "1.5625rem",
                                                borderRadius: "0.3125rem",
                                                //backgroundColor: "#535D9D",
                                                textAlign: "center",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                color: "white",
                                                fontSize: "0.875rem",
                                                fontWeight: "800",
                                            }}
                                        >
                                            1.00
                                        </Box>
                                        <Box
                                            sx={{
                                                height: "100%",
                                                width: "1.5625rem",
                                                borderRadius: "0.3125rem",
                                                backgroundColor: "#535D9D",
                                                textAlign: "center",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                color: "white",
                                                cursor: "pointer",
                                            }}
                                        >
                                            +
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Box
                                sx={{
                                    // width: "32.5%",
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
                                    //width: "32.5%",
                                    height: "4rem",
                                    borderRadius: "0.625rem",
                                    background: "#333965",
                                    fontSize: "1.375rem",
                                    fontWeight: 800,
                                    backgroundColor: "#3585ff",
                                    color: "#FFFFFF",
                                    width: "100%",
                                }}
                            >
                                BET
                            </Button>
                        </Grid>
                    </Grid>
                </>
            )}
        </>
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
    );
};

export default DinosaurButtonGrids;
