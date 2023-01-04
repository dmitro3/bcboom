import PromotionsHeader from "@/Components/Promotions/header";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import img from "../../../assets/promotions/pro_invite_background.svg";
import network from "../../../assets/promotions/netowkr.svg";
import network_sm from "../../../assets/promotions/network_sm.svg";
import img_sm from "../../../assets/promotions/pro_invite_sm.svg";
import { styled } from "@mui/system";
import React from "react";
import SemiBoldText from "@/Components/Promotions/Typography/SemiBoldText";
import { Box, Button, Typography } from "@mui/material";
import GreyText from "@/Components/Promotions/Typography/GreyText";
import { useScreenResolution } from "@/hooks/useScreeResolution";

const HEADER_TEXT = "Invite Friends to Create Wealth Together";

const Invite = () => {
    const PromotionPageWrapper = styled("div")(() => ({
        background: "#1D2036",
        width: "93%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: "2.125rem",
        paddingLeft: { xs: "5%", md: "5%" },
        paddingRight: { xs: "5%", md: "5%" },
        paddingBottom: "2.125rem",
        height: "80%",
    }));

    const { isMobile } = useScreenResolution();

    return (
        <>
            <Head title="Promotions Invite" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <PromotionPageWrapper>
                        <PromotionsHeader
                            imgUrl={img}
                            imgUrL_sm={img_sm}
                            headerText={HEADER_TEXT}
                        />
                        <Box
                            sx={{
                                marginTop: "2.1875rem",
                                display: "flex",
                                justifyContent: "center",
                                textAlign: "center",
                            }}
                        >
                            <SemiBoldText
                                customStyles={{
                                    fontWeight: 700,
                                    fontSize: "1.125rem",
                                }}
                            >
                                <Box
                                    component="span"
                                    sx={{ color: "#FFF96A", mr: "0.625rem" }}
                                >
                                    Invite
                                </Box>
                                Friends to Create Wealth Together
                            </SemiBoldText>
                        </Box>
                        <Box
                            sx={{
                                marginTop: "0.9375rem",
                                marginLeft: "auto",
                                marginRight: "auto",
                                display: "flex",
                                justifyContent: "center",
                                width: "90%",
                            }}
                        >
                            <GreyText
                                customStyles={{
                                    fontWeight: 600,
                                    fontSize: { xs: "0.875rem", md: "1rem" },
                                }}
                            >
                                Become one of our top partners Achieve a monthly
                                income of R$ 100,000
                            </GreyText>
                        </Box>
                        <Box
                            sx={{
                                marginTop: "2.1875rem",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <SemiBoldText
                                weight={700}
                                customStyles={{
                                    fontSize: {
                                        xs: "1.125rem",
                                        md: "1.5rem",
                                    },
                                }}
                            >
                                Referral Program
                            </SemiBoldText>
                        </Box>
                        <Box
                            sx={{
                                marginTop: "0.9375rem",
                                marginLeft: "auto",
                                marginRight: "auto",
                                display: "flex",
                                justifyContent: "center",
                                width: { xs: "90%", md: "60%" },
                            }}
                        >
                            <GreyText
                                customStyles={{
                                    fontWeight: 600,
                                    fontSize: { xs: "0.875rem", md: "1rem" },
                                    textAlign: {
                                        xs: "justify",
                                        sm: "center",
                                        md: "center",
                                    },
                                }}
                            >
                                Let the world know about Betdino - refer more
                                people and earn big money, having more chance to
                                supplement your income.
                            </GreyText>
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "2.0625rem",
                            }}
                        >
                            <Box
                                sx={{
                                    height: { xl: "57.25rem" },
                                    width: { xs: "90%", md: "80%" },
                                    padding: "2.3125rem",
                                    backgroundColor: "#2E3665",
                                    borderRadius: "0.625rem",
                                    justifySelf: "center",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                }}
                            >
                                <img src={isMobile ? network_sm : network} />
                                <Box
                                    sx={{
                                        width: { xs: "100%", md: "70%" },
                                        display: "flex",
                                        justifyContent: "center",
                                        textAlign: "center",
                                        mt: "2.3125rem",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: "Montserrat",
                                            fontWeight: 600,
                                            fontSize: {
                                                xs: "1rem",
                                                md: "1.125rem",
                                            },
                                        }}
                                    >
                                        Get a Unique Referral Code
                                    </Typography>
                                </Box>
                                <Button
                                    sx={{
                                        mt: "1.875rem",
                                        backgroundColor: "#3586FF",
                                        color: "white",
                                        fontWeight: 600,
                                        fontSize: "1rem",
                                        width: "9.25rem",
                                    }}
                                >
                                    Copy Code
                                </Button>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "2.0625rem",
                            }}
                        >
                            <Box
                                sx={{
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    display: "flex",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    width: { xs: "90%", md: "60%" },
                                }}
                            >
                                <SemiBoldText
                                    customStyles={{
                                        fontWeight: "700",
                                        fontSize: {
                                            xs: ".8375rem",
                                            md: "1.125rem",
                                        },
                                    }}
                                >
                                    Bonus Rules: All players at the "Promoter"
                                    level receive a percentage of the platform
                                    edge bonus for each bet.
                                </SemiBoldText>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "1.5625rem",
                            }}
                        >
                            <Box
                                sx={{
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    display: "flex",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    width: { xs: "70%", md: "60%" },
                                }}
                            >
                                <SemiBoldText
                                    customStyles={{
                                        fontWeight: "600",
                                        fontSize: {
                                            xs: ".875rem",
                                            md: "1.125rem",
                                        },
                                        color: "#3586FF",
                                    }}
                                >
                                    The proportions of the 3 levels are as
                                    follows:
                                </SemiBoldText>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "1.5625rem",
                            }}
                        >
                            <Box
                                sx={{
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                    display: "flex",
                                    justifyContent: "center",
                                    textAlign: { xs: "left", md: "center" },
                                    width: { xs: "80%", md: "50%" },
                                }}
                            >
                                <ul
                                    style={{
                                        listStyleType: "disc",
                                        fontSize: { xs: ".875", md: "1rem" },
                                    }}
                                >
                                    <li
                                        className="item"
                                        style={{ marginBottom: "0.625rem" }}
                                    >
                                        Level 1: Get 30% Platform Advantage
                                    </li>
                                    <li style={{ marginBottom: "0.625rem" }}>
                                        Level 2: Get 15% Platform Advantage
                                    </li>
                                    <li style={{ marginBottom: "0.625rem" }}>
                                        Level 3: Get 5% Platform Advantage
                                    </li>
                                </ul>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "1.5625rem",
                            }}
                        >
                            <Button
                                sx={{
                                    width: "12.3rem",
                                    height: "3rem",
                                    borderRadius: "0.625rem",
                                    backgroundColor: "#404569",
                                    fontSize: { xs: ".875rem", md: "1rem" },
                                    fontWeight: "600",
                                }}
                                variant="contained"
                            >
                                See all bonuses
                            </Button>
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "2.0625rem",
                            }}
                        >
                            <Box
                                sx={{
                                    height: {
                                        xs: "15rem",
                                        sm: "9rem",
                                        md: "9.1875rem",
                                        lg: "8.1875rem",
                                        xl: "8.1875rem",
                                    },
                                    width: {
                                        xs: "90%",
                                        md: "90%",
                                        lg: "80%",
                                        xl: "80%",
                                    },
                                    padding: "1rem",
                                    backgroundColor: "#2E3665",
                                    borderRadius: "0.625rem",
                                    textAlign: "left",
                                }}
                            >
                                <SemiBoldText
                                    weight={600}
                                    customStyles={{
                                        fontSize: { xs: ".875rem", md: "1rem" },
                                    }}
                                >
                                    If you are a blogger or influencer, you have
                                    a large audience and followers. We have
                                    special rewards for you! (Affiliate program
                                    with the highest referral rewards)
                                </SemiBoldText>
                                <SemiBoldText
                                    weight={600}
                                    customStyles={{
                                        fontSize: "1rem",

                                        marginTop: ".5rem",
                                    }}
                                >
                                    Important note: Only users who have passed
                                    the manager's request and approved, can
                                    participate in the program
                                </SemiBoldText>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "1.5625rem",
                                marginBottom: "1.5625rem",
                            }}
                        >
                            <Button
                                sx={{
                                    width: "12.3rem",
                                    height: "3rem",
                                    borderRadius: "0.625rem",
                                    backgroundColor: "#3586FF",
                                    fontSize: "1rem",
                                    fontWeight: "600",
                                }}
                                variant="contained"
                            >
                                Consultation
                            </Button>
                        </Box>
                    </PromotionPageWrapper>
                </PageTemplate>
            </GuestLayout>
        </>
    );
};

export default Invite;
