import PromotionsHeader from "@/Components/Promotions/header";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import img from "../../../assets/promotions/pro_invite_background.svg";
import { styled } from "@mui/system";
import React from "react";
import SemiBoldText from "@/Components/Promotions/Typography/SemiBoldText";
import { Box, Button } from "@mui/material";
import GreyText from "@/Components/Promotions/Typography/GreyText";

const PromotionPageWrapper = styled("div")(() => ({
    background: "#1D2036",
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "2.125rem",
    paddingLeft: "1.5625rem",
    paddingRight: "1.5625rem",
    paddingBottom: "2.125rem",
    height: "80%",
}));

const HEADER_TEXT = "Invite Friends to Create Wealth Together";

const Invite = () => {
    return (
        <>
            <Head title="Promotions Invite" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <PromotionPageWrapper>
                        <PromotionsHeader
                            imgUrl={img}
                            headerText={HEADER_TEXT}
                        />
                        <Box
                            sx={{
                                marginTop: "2.1875rem",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <SemiBoldText>
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
                            <GreyText>
                                To encourage all BetDino users millions of
                                benefits are offered to competent agents who
                                meet the requirements to receive a generous
                                bonus.
                            </GreyText>
                        </Box>
                        <Box
                            sx={{
                                marginTop: "2.1875rem",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <SemiBoldText weight={700}>
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
                                width: "60%",
                            }}
                        >
                            <GreyText>
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
                                    height: "47.25rem",
                                    width: "80%",
                                    padding: "2.3125rem",
                                    backgroundColor: "#2E3665",
                                    borderRadius: "0.625rem",
                                }}
                            ></Box>
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
                                    width: "60%",
                                }}
                            >
                                <SemiBoldText
                                    customStyles={{
                                        fontWeight: "700",
                                        fontSize: "1.125rem",
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
                                    width: "60%",
                                }}
                            >
                                <SemiBoldText
                                    customStyles={{
                                        fontWeight: "600",
                                        fontSize: "1.125rem",
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
                                    textAlign: "center",
                                    width: "50%",
                                }}
                            >
                                <ul
                                    style={{
                                        listStyleType: "disc",
                                        fontSize: "1rem",
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
                                    fontSize: "1rem",
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
                                    height: "8.1875rem",
                                    width: "80%",
                                    padding: "1rem",
                                    backgroundColor: "#2E3665",
                                    borderRadius: "0.625rem",
                                    textAlign: "left",
                                }}
                            >
                                <SemiBoldText
                                    weight={600}
                                    customStyles={{
                                        fontSize: "1rem",
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
