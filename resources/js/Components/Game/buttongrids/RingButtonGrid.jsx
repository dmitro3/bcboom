import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const RingButtonGrid = () => {
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
                            height: "3rem",
                            borderRadius: "0.625rem",
                            background: "#333965",
<<<<<<< HEAD
                            fontSize: ".875rem",
=======
                            fontSize: { xs: ".75rem", md: ".875rem" },
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
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
<<<<<<< HEAD
                                    fontSize: ".875rem",
=======
                                    fontSize: { xs: ".75rem", md: ".875rem" },
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                    fontWeight: 800,
                                    color: "#A6B0DA",
                                    mr: ".3rem",
                                }}
                            >
                                Risk:
                            </Typography>
                            <Typography
                                sx={{
<<<<<<< HEAD
                                    fontSize: ".875rem",
=======
                                    fontSize: { xs: ".75rem", md: ".875rem" },
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
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
                    {" "}
                    <Button
                        endIcon={<ExpandMoreIcon sx={{ fontSize: "1rem" }} />}
                        sx={{
                            width: "100%",
                            height: "3rem",
                            borderRadius: "0.625rem",
                            background: "#333965",
<<<<<<< HEAD
                            fontSize: ".875rem",
=======
                            fontSize: { xs: ".75rem", md: ".875rem" },
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                            fontWeight: 800,
                            backgroundColor: "#333965",
                            color: "#A6B0DA",
                            //display: "flex",
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
<<<<<<< HEAD
                                    fontSize: ".875rem",
=======
                                    fontSize: { xs: ".75rem", md: ".875rem" },
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                    fontWeight: 800,
                                    color: "#A6B0DA",
                                    mr: ".3rem",
                                }}
                            >
                                Segmentation:
                            </Typography>{" "}
                            <Typography
                                sx={{
<<<<<<< HEAD
                                    fontSize: ".875rem",
=======
                                    fontSize: { xs: ".75rem", md: ".875rem" },
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                    fontWeight: 800,
                                    color: "white",
                                }}
                            >
                                50
                            </Typography>
                        </Box>
                    </Button>
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
<<<<<<< HEAD
                                        fontSize: "1rem",
=======
                                        fontSize: { xs: ".875rem", md: "1rem" },
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
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
<<<<<<< HEAD
                            fontSize: "1.375rem",
=======
                            fontSize: { xs: "1rem", md: "1.375rem" },
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
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

export default RingButtonGrid;
