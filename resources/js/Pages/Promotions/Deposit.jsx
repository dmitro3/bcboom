import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import img from "../../../assets/promotions/deposit_pro_background.svg";
import img_sm from "../../../assets/promotions/pro_deposit_sm.svg";
import SemiBoldText from "@/Components/Promotions/Typography/SemiBoldText";
import PromotionsHeader from "@/Components/Promotions/header";
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

const HEADER_TEXT = "Get 75% off your second deposit limited to R$ 1888";

const Deposit = () => {
=======
const HEADER_TEXT = "Get 75% off your second deposit limited to R$ 1888";

const Deposit = () => {
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
            <Head title="Promotions Deposit" />
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
                                    GET 75%
                                </Box>
                                off your second deposit limited to R$ 1888
                            </SemiBoldText>
                        </Box>
                        <Box
                            sx={{
                                marginTop: "0.9375rem",
                                marginLeft: "auto",
                                marginRight: "auto",
                                display: "flex",
                                justifyContent: "center",
<<<<<<< HEAD
                                width: "90%",
                            }}
                        >
                            <GreyText>
=======
                                textAlign: "center",
                                width: "90%",
                            }}
                        >
                            <GreyText
                                customStyles={{
                                    fontWeight: 600,
                                    fontSize: { xs: "0.875rem", md: "1rem" },
                                }}
                            >
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
                                We are happy to see you again here at Betdino!
                                It's time to make your second deposit for more
                                fun. Betdino will send you a bonus of 75% of
                                your deposited amount limited to R$1888 .your
                                deposit, the bonus will automatically be
                                credited to your account, so please check the
                                system for messages sent to you
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
                                        xs: "1rem",
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
                                    }}
                                >
                                    <SemiBoldText
                                        weight={800}
<<<<<<< HEAD
                                        customStyles={{ fontSize: "1.25rem" }}
=======
                                        customStyles={{
                                            fontSize: {
                                                xs: "1.25rem",
                                                md: "1.25rem",
                                            },
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
                                                xs: "1.25rem",
                                                md: "1.25rem",
                                            },
                                        }}
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
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
                                        customStyles={{ fontSize: "1.625rem" }}
                                    >
                                        75% of the deposit amount limit 1888
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
                                        Only the Second order with a deposit
                                        amount of R$100 or more can participate
                                        in this event, and this event can only
                                        participate once
                                    </li>
                                    <li style={{ marginBottom: "0.625rem" }}>
                                        The maximum bonus for this campaign is
                                        1888 BRL. It is not possible to
                                        participate at the same time in other
                                        promotions.
                                    </li>
                                    <li style={{ marginBottom: "0.625rem" }}>
                                        Withdrawal conditions: the effective bet
                                        amount is equal to or greater than 20
                                        times or more of the sum of the deposit
                                        amount and the bonus amount
                                    </li>
                                    <li style={{ marginBottom: "0.625rem" }}>
                                        After completing the deposit, submitting
                                        the application in the personal
                                        promotion center, you will receive
                                        BetDino's lucky bonus and the bonuses
                                        can be played and withdrawn!
                                    </li>
                                    <li style={{ marginBottom: "0.625rem" }}>
                                        Please ensure that your name, contact
                                        details and Social Security number are
                                        accurate and unique. If the same player
                                        uses different network IPs to register
                                        multiple accounts to claim the prize,
                                        this will be considered cheating and
                                        their account will be permanently
                                        frozen.
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

export default Deposit;
