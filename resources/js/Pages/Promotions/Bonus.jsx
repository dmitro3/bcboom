import PromotionsHeader from "@/Components/Promotions/header";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import img from "../../../assets/promotions/bonus_pro_background.svg";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import SemiBoldText from "@/Components/Promotions/Typography/SemiBoldText";
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

const HEADER_TEXT = "Crazy Weekend Bonus up to 777";

const Bonus = () => {
    return (
        <>
            <Head title="Promotions Bonus" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <PromotionPageWrapper>
                        <PromotionsHeader
                            headerText={HEADER_TEXT}
                            imgUrl={img}
                            customStyles={{
                                paddingLeft: "2rem",
                            }}
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
                                    Crazy
                                </Box>
                                Weekend Bonus up to 777
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
                                Enjoy a relaxing and enjoyable weekend with a
                                login bonus on Sundays only at Betdino.
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
                                    width: "80%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
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
                                        customStyles={{ fontSize: "1.625rem" }}
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
                                            fontSize: "1.625rem",
                                        }}
                                    >
                                        You will have the chance to receive a
                                        bonus up to R$777
                                    </SemiBoldText>
                                </PromotionCard>
                            </Box>
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
                                    width: "80%",
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
                                    width: "80%",
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
                                        All bonus offers are limited to one per
                                        person and IP.
                                    </li>
                                    <li style={{ marginBottom: "0.625rem" }}>
                                        The Sunday bonus is delivered randomly
                                        to all drawn Sunday deposits.
                                    </li>

                                    <li style={{ marginBottom: "0.625rem" }}>
                                        To be able to withdraw your deposits and
                                        bonuses, you must fulfill a predefined
                                        rollover of 20x the bonus amount.
                                    </li>
                                    <li style={{ marginBottom: "0.625rem" }}>
                                        To qualify for the bonus, you must make
                                        a minimum deposit of BRL 100.
                                    </li>
                                    <li style={{ marginBottom: "0.625rem" }}>
                                        Once the bonus has been activated, it
                                        can no longer be cancelled.
                                    </li>
                                    <li style={{ marginBottom: "0.625rem" }}>
                                        The bonus can be used in any game,
                                        except for live casino. poker, E Special
                                        GAMES and opposite betting games.
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

export default Bonus;
