import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import img from "../../../assets/promotions/full_bonus_pro_background.svg";
import img_sm from "../../../assets/promotions/fullbonus_pro_sm.svg";
import { styled } from "@mui/system";
import React from "react";
import PromotionsHeader from "@/Components/Promotions/header";
import SemiBoldText from "@/Components/Promotions/Typography/SemiBoldText";
import { Box } from "@mui/material";
import GreyText from "@/Components/Promotions/Typography/GreyText";
import PromotionCard from "@/Components/Promotions/card";
import { useScreenResolution } from "@/hooks/useScreeResolution";

const HEADER_TEXT = "COME AND GET 100% BONUS  UP TO 999";

const FullBonus = () => {
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
            <Head title="Promotions Full Bonus" />

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
                                fontSize: { xs: "1rem", md: "1.125rem" },
                                width: { xs: "75%", md: "100%" },
                            }}
                        >
                            <Box
                                component="span"
                                sx={{ color: "#FFF96A", mr: "0.625rem" }}
                            >
                                COME
                            </Box>
                            AND GET 100% BONUS UP TO 999
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
                            {!isMobile
                                ? `In order to thank you for your trust and support
                                in BetDino, your first successful deposit amount
                                of more than R$100, BetDino will give you a free
                                bonus of 100% of the deposit amount, I sincerely
                                wish you to earn more! your deposit, the bonus
                                will automatically be credited to your account,
                                so please check the system for messages sent to
                                you`
                                : `To encourage all BetDino users millions of benefits are offered to competent agents who meet the requirements to receive a generous bonus.`}
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
                                fontSize: { xs: "1rem", md: "1.5rem" },
                                fontWeight: 700,
                            }}
                        >
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
                                    md: "80%",
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
                                }}
                            >
                                <SemiBoldText
                                    weight={800}
                                    customStyles={{ fontSize: "1.25rem" }}
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
                                            xs: "1.5rem",
                                            md: "1.625rem",
                                        },
                                    }}
                                >
                                    R$ 100 OR MORE
                                </SemiBoldText>
                            </PromotionCard>
                            <PromotionCard
                                customStyles={{
                                    backgroundImage:
                                        "linear-gradient( 99.2deg, #3971E8 4.19%, #5848C8 108.12%)",
                                }}
                            >
                                <SemiBoldText
                                    weight={800}
                                    customStyles={{ fontSize: "1.25rem" }}
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
                                            xs: "1.5rem",
                                            md: "1.625rem",
                                        },
                                    }}
                                >
                                    100% of the deposit amount limit 999
                                </SemiBoldText>
                            </PromotionCard>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            width: { xs: "100%", md: "100%" },

                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "1.5625rem",
                        }}
                    >
                        <Box
                            sx={{
                                width: { xs: "90%", md: "80%" },
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
                            width: { xs: " 98%", md: "100%" },
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "1.5625rem",
                            paddingLeft: "1.25rem",
                        }}
                    >
                        <Box
                            sx={{
                                width: { xs: "98%", md: "80%" },
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <ul
                                style={{
                                    listStyleType: "disc",
                                    fontSize: {
                                        xs: ".9375rem",
                                        md: "1.125rem",
                                    },
                                }}
                            >
                                <li
                                    className="item"
                                    style={{ marginBottom: "0.625rem" }}
                                >
                                    Only the first order with a deposit amount
                                    of R$100 or more can participate in this
                                    event, and this event can only participate
                                    once
                                </li>
                                <li style={{ marginBottom: "0.625rem" }}>
                                    The maximum bonus for this campaign is R$999
                                    . It is not possible to participate at the
                                    same time in other promotions.
                                </li>
                                <li style={{ marginBottom: "0.625rem" }}>
                                    Withdrawal conditions: the effective bet
                                    amount is equal to or greater than 20 times
                                    or more of the sum of the deposit amount and
                                    the bonus amount
                                </li>
                                <li style={{ marginBottom: "0.625rem" }}>
                                    After completing the deposit, submitting the
                                    application in the personal promotion
                                    center, you will receive BetDino's lucky
                                    bonus and the bonuses can be played and
                                    withdrawn!
                                </li>
                                <li style={{ marginBottom: "0.625rem" }}>
                                    Please ensure that your name, contact
                                    details and Social Security number are
                                    accurate and unique. If the same player uses
                                    different network IPs to register multiple
                                    accounts to claim the prize, this will be
                                    considered cheating and their account will
                                    be permanently frozen.
                                </li>
                            </ul>
                        </Box>
                    </Box>
                </PromotionPageWrapper>
            </PageTemplate>
        </>
    );
};

export default FullBonus;
