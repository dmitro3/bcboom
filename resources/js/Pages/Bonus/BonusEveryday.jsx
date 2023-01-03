import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import img from "../../../assets/promotions/saba_spin_1.svg";
import { Head } from "@inertiajs/inertia-react";
import React from "react";
import PromotionsHeader from "@/Components/Promotions/header";
import SemiBoldText from "@/Components/Promotions/Typography/SemiBoldText";
import BoldText from "@/Components/Promotions/Typography/BoldText";
import GreyText from "@/Components/Promotions/Typography/GreyText";
import PromotionCard from "@/Components/Promotions/card";

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

const HEADER_TEXT = "GET 8% BONUS EVERY DAY";

const BonusEveryday = () => {
    return (
        <>
            <Head title="Promotions Bonus Everyday" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <PromotionPageWrapper>
                        <Box
                            sx={{
                                width: "100%",
                                height: "17.375rem",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "relative",
                                borderRadius: "0.625rem",
                                background: `linear-gradient(95.62deg, #3971E8 11.91%, #377EEC 60.57%, #3FAEEF 100% )`,
                            }}
                        >
                            <Box
                                sx={{
                                    width: "80%",
                                    height: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <BoldText
                                    customStyles={{
                                        width: "30rem",
                                    }}
                                >
                                    GET 8% BONUS EVERY DAY
                                </BoldText>
                                <img src={img} />
                            </Box>
                        </Box>
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
                                    GET
                                </Box>
                                8% BONUS EVERY DAY
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
                                Bcboom will cherish and wait every day with you!
                                From now on, you have 3 chances to get more
                                bonuses every day. As long as your deposit
                                amount is greater than or equal to R$100, you
                                will receive an additional 8% of the Betdino
                                free deposit amount for free as a bonus!
                                Sincerely, I wish you to earn more!
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
                                REQUIREMENTS AND BONUS
                            </SemiBoldText>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "1.5625rem",
                            }}
                        >
                            <Box
                                sx={{
                                    width: {
                                        xs: "100%",
                                        md: "98%",
                                        lg: "98%",
                                        xl: "80%",
                                    },
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    flexDirection: {
                                        xs: "column",
                                        md: "row",
                                    },
                                }}
                            >
                                <PromotionCard
                                    customStyles={{
                                        backgroundImage:
                                            "linear-gradient( 100.65deg, #3971E8 2.29%, #5846C7 100%)",
                                        width: { xs: "100%", md: "32%" },
                                    }}
                                >
                                    <SemiBoldText
                                        weight={800}
                                        customStyles={{
                                            fontSize: {
                                                md: "1rem",
                                                lg: "1.25rem",
                                                xl: "1.25rem",
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{ color: "#FFF96A" }}
                                            component={"span"}
                                        >
                                            DEPOSIT LIMIT
                                        </Box>
                                    </SemiBoldText>
                                    <SemiBoldText
                                        weight={700}
                                        customStyles={{
                                            fontSize: {
                                                md: "1.375rem",
                                                lg: "1.625rem",
                                                xl: "1.625rem",
                                            },
                                        }}
                                    >
                                        Deposit at least R$100 in your account
                                        on Sundays
                                    </SemiBoldText>
                                </PromotionCard>
                                <PromotionCard
                                    customStyles={{
                                        backgroundImage:
                                            "linear-gradient( 99.2deg, #3971E8 4.19%, #5848C8 108.12%)",
                                        paddingLeft: "0.4rem",
                                        paddingRight: "0.4rem",
                                        width: { xs: "100%", md: "32%" },
                                    }}
                                >
                                    <SemiBoldText
                                        weight={800}
                                        customStyles={{
                                            fontSize: {
                                                md: "1rem",
                                                lg: "1.25rem",
                                                xl: "1.25rem",
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{ color: "#FFF96A" }}
                                            component={"span"}
                                        >
                                            BONUS
                                        </Box>
                                    </SemiBoldText>
                                    <SemiBoldText
                                        weight={700}
                                        customStyles={{
                                            fontSize: {
                                                md: "1.375rem",
                                                lg: "1.625rem",
                                                xl: "1.625rem",
                                            },
                                        }}
                                    >
                                        You will have the chance to receive a
                                        bonus up to R$777
                                    </SemiBoldText>
                                </PromotionCard>
                                <PromotionCard
                                    customStyles={{
                                        backgroundImage:
                                            "linear-gradient( 99.2deg, #3971E8 4.19%, #5848C8 108.12%)",
                                        paddingLeft: "0.4rem",
                                        paddingRight: "0.4rem",
                                        width: { xs: "100%", md: "32%" },
                                    }}
                                >
                                    <SemiBoldText
                                        weight={800}
                                        customStyles={{
                                            fontSize: {
                                                md: "1rem",
                                                lg: "1.25rem",
                                                xl: "1.25rem",
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{ color: "#FFF96A" }}
                                            component={"span"}
                                        >
                                            PARTICIPATION NUMBER
                                        </Box>
                                    </SemiBoldText>
                                    <SemiBoldText
                                        weight={700}
                                        customStyles={{
                                            fontSize: {
                                                md: "1.375rem",
                                                lg: "1.625rem",
                                                xl: "1.625rem",
                                            },
                                        }}
                                    >
                                        3 TIMES A DAY
                                    </SemiBoldText>
                                </PromotionCard>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                width: "100%",
                                justifyContent: {
                                    xs: "flex-start",
                                    md: "center",
                                },
                                alignItems: "center",
                                marginTop: "1.5625rem",
                            }}
                        >
                            <Box
                                sx={{
                                    width: {
                                        md: "98%",
                                        lg: "98%",
                                        xl: "80%",
                                    },
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <SemiBoldText
                                    weight={700}
                                    customStyles={{ color: "#FFF96A" }}
                                >
                                    Rules
                                </SemiBoldText>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "1.5625rem",
                                paddingLeft: "1.25rem",
                            }}
                        >
                            <Box
                                sx={{
                                    width: {
                                        md: "98%",
                                        lg: "98%",
                                        xl: "80%",
                                    },
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <ul
                                    style={{
                                        listStyleType: "disc",
                                        fontSize: "1.125rem",
                                    }}
                                >
                                    <li
                                        className="item"
                                        style={{ marginBottom: "0.625rem" }}
                                    >
                                        Only the first 3 orders with a deposit
                                        greater than or equal to R$100 can
                                        participate in the event
                                    </li>
                                    <li style={{ marginBottom: "0.625rem" }}>
                                        Withdrawal conditions: The effective bet
                                        amount is equal to or greater than 25
                                        times the bonus amount. Only
                                        Self-Developed Games are allowed.
                                    </li>

                                    <li style={{ marginBottom: "0.625rem" }}>
                                        Make sure your name, contact details and
                                        CPF are accurate and unique. If the same
                                        player uses different network IPs to
                                        register multiple accounts to claim the
                                        prize, this will be considered cheating
                                        and their account will be permanently
                                        frozen.
                                    </li>
                                    <li style={{ marginBottom: "0.625rem" }}>
                                        It is not possible to participate in
                                        other promotions at the same time.
                                    </li>
                                </ul>
                            </Box>
                        </Box>
                    </PromotionPageWrapper>
                </PageTemplate>
            </GuestLayout>
        </>
    );
};

export default BonusEveryday;
