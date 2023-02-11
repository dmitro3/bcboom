import React from "react";
import { Box, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import { Switch } from "antd";
import { useSelector } from "react-redux";
import { currencyFormatter } from "@/utils/util";

const GameTab = () => {
    const [tabValue, setTabValue] = React.useState(1);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                style={{ width: "100%" }}
                {...other}
            >
                {value === index && (
                    <Box sx={{}}>
                        <Box
                            sx={{
                                width: "100%",
                                marginTop: "1.25rem",
                            }}
                        >
                            {children}
                        </Box>
                    </Box>
                )}
            </div>
        );
    }

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            "aria-controls": `simple-tabpanel-${index}`,
        };
    }

    const { gameData } = useSelector((state) => state.game);
    const { wallet } = useSelector((state) => state.wallet);
    return (
        <div>
            <Box
                sx={{
                    width: "100%",
                    marginTop: "1.875rem",
                    padding: "0.625rem, 0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <Box>
                    <Tabs
                        value={tabValue}
                        onChange={handleTabChange}
                        aria-label="lab API tabs example"
                        indicatorColor="primary"
                    >
                        <Tab label="Manual" {...a11yProps(0)} />
                        <Tab label="Auto" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={tabValue} index={0}></TabPanel>
                <TabPanel value={tabValue} index={1}>
                    <Box
                        sx={{
                            height: { xs: "30rem", md: "14.9375rem" },
                            background: "#272C4B",
                            borderRadius: "0.625rem",
                            flexGrow: 1,

                            padding: "1.2rem",
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={4}>
                                <Box
                                    sx={{
                                        width: "100%",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: "700",
                                            fontSize: {
                                                xs: ".8rem",
                                                md: ".6rem",
                                                lg: ".875rem",
                                            },
                                            color: "#A6B0DA",
                                            mb: "0.3125rem",
                                        }}
                                    >
                                        Number of Bets
                                    </Typography>
                                    <Box
                                        sx={{
                                            height: "4.0625rem",
                                            borderRadius: "0.625rem",
                                            pl: ".9375rem",
                                            background: "#333965",
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                width: "15%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontWeight: 800,
                                                fontSize: "1rem",
                                            }}
                                        >
                                            0
                                        </Box>
                                        <Box
                                            sx={{
                                                display: {
                                                    xs: "none",
                                                    md: "flex",
                                                },
                                                width: "30%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontWeight: 800,
                                                fontSize: "1rem",
                                            }}
                                        >
                                            R$ 0
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Box
                                    sx={{
                                        width: "100%",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: "700",
                                            fontSize: {
                                                xs: ".8rem",
                                                md: ".6rem",
                                                lg: ".875rem",
                                            },
                                            color: "#A6B0DA",
                                            mb: "0.3125rem",
                                        }}
                                    >
                                        Stop on Profits
                                    </Typography>
                                    <Box
                                        sx={{
                                            height: "4.0625rem",
                                            borderRadius: "0.625rem",
                                            pl: ".9375rem",
                                            background: "#333965",
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: {
                                                    xs: "none",
                                                    md: "flex",
                                                },
                                                width: "15%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontWeight: 800,
                                                fontSize: "1rem",
                                            }}
                                        >
                                            0
                                        </Box>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                width: "30%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontWeight: 800,
                                                fontSize: "1rem",
                                            }}
                                        >
                                            R$ 0
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Box
                                    sx={{
                                        width: "100%",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: "700",
                                            fontSize: {
                                                xs: ".8rem",
                                                md: ".6rem",
                                                lg: ".875rem",
                                            },
                                            color: "#A6B0DA",
                                            mb: "0.3125rem",
                                        }}
                                    >
                                        Stop the Loss
                                    </Typography>
                                    <Box
                                        sx={{
                                            height: "4.0625rem",
                                            borderRadius: "0.625rem",
                                            pl: ".9375rem",
                                            background: "#333965",
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: {
                                                    xs: "none",
                                                    md: "flex",
                                                },
                                                width: "15%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontWeight: 800,
                                                fontSize: "1rem",
                                            }}
                                        >
                                            0
                                        </Box>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                width: "30%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontWeight: 800,
                                                fontSize: "1rem",
                                            }}
                                        >
                                            R$ 0
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Box
                                    sx={{
                                        width: "100%",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: "700",
                                            fontSize: {
                                                xs: ".8rem",
                                                md: ".375rem",
                                                lg: ".875rem",
                                            },
                                            color: "#A6B0DA",
                                            mb: "0.3125rem",
                                        }}
                                    >
                                        Maximum Value of Bet
                                    </Typography>
                                    <Box
                                        sx={{
                                            height: "4.0625rem",
                                            borderRadius: "0.625rem",
                                            pl: ".9375rem",
                                            background: "#333965",
                                            display: "flex",
                                            justifyContent: "flex-start",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                width: "30%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontWeight: 800,
                                                fontSize: "1rem",
                                            }}
                                        >
                                            R${" "}
                                            {currencyFormatter
                                                .format(
                                                    wallet.withdrawable_balance
                                                )
                                                .replace("$", "")}
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box
                                    sx={{
                                        width: "100%",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: "700",
                                            fontSize: {
                                                xs: ".8rem",
                                                md: ".6rem",
                                                lg: ".875rem",
                                            },
                                            color: "#A6B0DA",
                                            mb: "0.3125rem",
                                        }}
                                    >
                                        Stop When Winning
                                    </Typography>
                                    <Box
                                        sx={{
                                            height: "4.0625rem",
                                            display: "flex",
                                            justifyContent: "flex-start",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                width: { xs: "50%", md: "60%" },
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <Switch
                                                defaultChecked
                                                style={{
                                                    transform: "rotate(90deg)",
                                                }}
                                            />
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent:
                                                        "space-between",
                                                    width: "80%",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontWeight: 700,
                                                        fontSize: "0.625rem",
                                                        marginBottom: ".5rem",
                                                        color: "#A6B0DA",
                                                    }}
                                                >
                                                    Reset
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontWeight: 700,
                                                        fontSize: "0.625rem",
                                                        color: "#A6B0DA",
                                                    }}
                                                >
                                                    Automentor
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                width: { xs: "48%", md: "40%" },
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontWeight: 800,
                                                fontSize: "1rem",
                                                borderRadius: "0.625rem",

                                                ml: "auto",
                                                mr: "auto",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    height: "4.0625rem",
                                                    borderRadius: "0.625rem",
                                                    width: "100%",
                                                    background: "#333965",
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                    pl: {
                                                        xs: ".9375rem",
                                                        md: 0,
                                                    },
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        width: "25%",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "center",
                                                        fontWeight: 800,
                                                        fontSize: "1rem",
                                                    }}
                                                >
                                                    0
                                                </Box>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        width: "50%",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "center",
                                                        fontWeight: 800,
                                                        fontSize: "1rem",
                                                    }}
                                                >
                                                    %
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box
                                    sx={{
                                        width: "100%",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: "700",
                                            fontSize: {
                                                xs: ".8rem",
                                                md: ".6rem",
                                                lg: ".875rem",
                                            },
                                            color: "#A6B0DA",
                                            mb: "0.3125rem",
                                        }}
                                    >
                                        Stop When Losing
                                    </Typography>
                                    <Box
                                        sx={{
                                            height: "4.0625rem",
                                            display: "flex",
                                            justifyContent: "flex-start",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                width: { xs: "50%", md: "60%" },
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <Switch
                                                defaultChecked
                                                style={{
                                                    transform: "rotate(90deg)",
                                                }}
                                            />
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent:
                                                        "space-between",
                                                    width: "80%",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        fontWeight: 700,
                                                        fontSize: "0.625rem",
                                                        marginBottom: ".5rem",
                                                        color: "#A6B0DA",
                                                    }}
                                                >
                                                    Reset
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontWeight: 700,
                                                        fontSize: "0.625rem",
                                                        color: "#A6B0DA",
                                                    }}
                                                >
                                                    Automentor
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                width: {
                                                    xs: "48%",

                                                    md: "40%",
                                                },
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontWeight: 800,
                                                fontSize: "1rem",
                                                borderRadius: "0.625rem",
                                                ml: "auto",
                                                mr: "auto",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    height: "4.0625rem",
                                                    borderRadius: "0.625rem",
                                                    width: "100%",
                                                    background: "#333965",
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                    pl: {
                                                        xs: ".9375rem",
                                                        md: 0,
                                                    },
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        width: "25%",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "center",
                                                        fontWeight: 800,
                                                        fontSize: "1rem",
                                                    }}
                                                >
                                                    0
                                                </Box>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        width: "50%",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "center",
                                                        fontWeight: 800,
                                                        fontSize: "1rem",
                                                    }}
                                                >
                                                    %
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </TabPanel>
            </Box>
        </div>
    );
};

export default GameTab;
