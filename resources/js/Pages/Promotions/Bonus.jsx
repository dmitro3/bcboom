import PromotionsHeader from "@/Components/Promotions/header";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import img from "../../../assets/promotions/bonus_pro_background.svg";
import img_sm from "../../../assets/promotions/pro_bonus_sm.svg";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import SemiBoldText from "@/Components/Promotions/Typography/SemiBoldText";
import GreyText from "@/Components/Promotions/Typography/GreyText";
import PromotionCard from "@/Components/Promotions/card";

<<<<<<< HEAD
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
=======
const HEADER_TEXT = "Crazy Weekend Bonus up to 777";

const Bonus = () => {
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

>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
    return (
        <>
            <Head title="Promotions Bonus" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <PromotionPageWrapper>
                        <PromotionsHeader
                            headerText={HEADER_TEXT}
                            imgUrl={img}
                            imgUrL_sm={img_sm}
                            customStyles={{
                                paddingLeft: "2rem",
                            }}
                        />
                        <Box
                            sx={{
                                marginTop: "2.1875rem",
                                display: "flex",
                                justifyContent: "center",
<<<<<<< HEAD
                            }}
                        >
                            <SemiBoldText>
=======
                                textAlign: "center",
                            }}
                        >
                            <SemiBoldText
                                customStyles={{
                                    fontWeight: 700,
                                    fontSize: "1.125rem",
                                }}
                            >
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
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
<<<<<<< HEAD
                            <GreyText>
=======
                            <GreyText
                                customStyles={{
                                    fontWeight: 600,
                                    fontSize: { xs: "0.875rem", md: "1rem" },
                                }}
                            >
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
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
<<<<<<< HEAD
                            <SemiBoldText weight={700}>
=======
                            <SemiBoldText
                                weight={700}
                                customStyles={{
                                    fontSize: {
                                        xs: "1.125rem",
                                        md: "1.5rem",
                                    },
                                }}
                            >
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
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
                                    width: { xs: "98%", md: "80%" },
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
<<<<<<< HEAD
=======
                                        //height: "13rem",
                                        padding: "1rem",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                    }}
                                >
                                    <SemiBoldText
                                        weight={800}
<<<<<<< HEAD
                                        customStyles={{ fontSize: "1.25rem" }}
=======
                                        customStyles={{
                                            fontSize: "1.25rem",
                                        }}
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
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
<<<<<<< HEAD
                                        customStyles={{ fontSize: "1.625rem" }}
=======
                                        customStyles={{
                                            fontSize: {
                                                xs: "1.5rem",
                                                md: "1.625rem",
                                            },

                                            width: "100%",
                                        }}
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                    >
                                        Deposit at least R$100 in your account
                                        on Sundays
                                    </SemiBoldText>
                                </PromotionCard>
                                <PromotionCard
                                    customStyles={{
                                        backgroundImage:
                                            "linear-gradient( 99.2deg, #3971E8 4.19%, #5848C8 108.12%)",
<<<<<<< HEAD
                                        paddingLeft: "0.4rem",
                                        paddingRight: "0.4rem",
=======
                                        padding: "1rem",
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
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
<<<<<<< HEAD
                                            fontSize: "1.625rem",
=======
                                            fontSize: {
                                                xs: "1.5rem",
                                                md: "1.625rem",
                                            },
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
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
                                    width: { xs: "98%", md: "80%" },
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <SemiBoldText
                                    weight={700}
<<<<<<< HEAD
                                    customStyles={{ color: "#FFF96A" }}
=======
                                    customStyles={{
                                        color: "#FFF96A",
                                        fontSize: {
                                            xs: "1.125rem",
                                            md: "1.5rem",
                                        },
                                    }}
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
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
                                    width: { xs: "98%", md: "80%" },
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <ul
                                    style={{
                                        listStyleType: "disc",
<<<<<<< HEAD
                                        fontSize: "1.125rem",
=======
                                        fontSize: {
                                            xs: "0.9375rem",
                                            md: "1.125rem",
                                        },
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
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
