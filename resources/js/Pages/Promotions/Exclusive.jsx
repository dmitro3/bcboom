import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import img from "../../../assets/promotions/exclusive_pro_background.svg";
import img_sm from "../../../assets/promotions/exclusive_sm.svg";
import infobook_sm from "../../../assets/promotions/infoBook.svg";
import activity from "../../../assets/promotions/promotion_activity.svg";
import activity_icon from "../../../assets/promotions/activity_sm.svg";
import bonus_icon from "../../../assets/promotions/bonus_icon.svg";
import bell_icon from "../../../assets/promotions/bell.svg";
import details_icon from "../../../assets/promotions/info.svg";
import { promotionsTableColumns, promotionsTableRows } from "@/data/promotions";
import { activeUsersColumns, activeUsersRows } from "@/data/promotions";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import BoldText from "@/Components/Promotions/Typography/BoldText";
import SemiBoldText from "@/Components/Promotions/Typography/SemiBoldText";
import GreyText from "@/Components/Promotions/Typography/GreyText";
import PromotionsHeader from "@/Components/Promotions/header";
import { useScreenResolution } from "@/hooks/useScreeResolution";

const HEADER_TEXT = "Exclusive VIP Bonus";

const Exclusive = () => {
    const PromotionPageWrapper = styled("div")(() => ({
        background: "#1D2036",
        width: "93%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: "2.125rem",
        paddingLeft: { xs: "5%", md: "5%" },
        paddingRight: { xs: "5%", md: "5%" },
        paddingBottom: "2.125rem",
        minHeight: { xs: "95%", md: "80%" },
        //overflowY: { xs: "scroll", md: "hidden" },
    }));
    const { isMobile } = useScreenResolution();

    return (
        <>
            <Head title="Promotion Exclusive" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <PromotionPageWrapper>
                        <PromotionsHeader
                            imgUrl={img}
                            imgUrL_sm={img_sm}
                            headerText={HEADER_TEXT}
                        />
                        {!isMobile ? (
                            <Box
                                sx={{
                                    marginTop: "35px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <SemiBoldText>
                                    <Box
                                        component="span"
                                        sx={{ color: "#FFF96A", mr: "10px" }}
                                    >
                                        Exclusive
                                    </Box>
                                    VIP Bonus
                                </SemiBoldText>
                            </Box>
                        ) : (
                            <Box
                                sx={{
                                    marginTop: "35px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    width: "84%",
                                    mx: "auto",
                                }}
                            >
                                <SemiBoldText
                                    customStyles={{
                                        fontSize: "1.125rem",
                                        fontWeight: "700",
                                    }}
                                >
                                    <Box
                                        component="span"
                                        sx={{ color: "#FFF96A", mr: "10px" }}
                                    >
                                        Millions
                                    </Box>
                                    of Distributor Benefits
                                </SemiBoldText>
                            </Box>
                        )}
                        <Box
                            sx={{
                                marginTop: "15px",
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
                                {isMobile
                                    ? `To encourage all BetDino users millions of benefits are offered to competent agents who meet the requirements to receive a generous bonus.`
                                    : `To give back to all Bcboom users, the VIP reward
                                mechanism is now open. As long as you can meet
                                the requirements, you can receive generous
                                bonuses!`}
                            </GreyText>
                        </Box>
                        {!isMobile ? (
                            <>
                                {" "}
                                <Box
                                    sx={{
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        paddingTop: "3rem",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            height: "9rem",
                                            width: "9rem",
                                            backgroundImage: `url(${activity})`,
                                            backgroundSize: "cover",
                                        }}
                                    ></Box>
                                </Box>
                                <Box
                                    sx={{
                                        width: "100%",
                                        display: "flex",
                                        textAlign: "center",
                                        padding: "",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: "700",
                                            fontSize: "1.125rem",
                                            fontFamily: "Montserrat",
                                        }}
                                    >
                                        Activity Requirements
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        marginTop: "1rem",
                                        textAlign: "center",
                                        display: "flex",
                                        justifyContent: "center",
                                        width: "100%",
                                    }}
                                >
                                    <GreyText>
                                        Players upgrade to a new VIP level you
                                        will get free bonus, no withdrawal
                                        requirements.
                                    </GreyText>
                                </Box>
                                <Box
                                    sx={{
                                        marginTop: "3.125rem",
                                        textAlign: "center",
                                        display: "flex",
                                        justifyContent: "center",
                                        width: "100%",
                                    }}
                                >
                                    <SemiBoldText weight={700}>
                                        Event Bonus
                                    </SemiBoldText>
                                </Box>
                                <Box
                                    sx={{
                                        marginTop: "1.5rem",
                                        textAlign: "center",
                                        display: "flex",
                                        justifyContent: "center",
                                        width: "100%",
                                    }}
                                >
                                    <GreyText>
                                        Players can receive corresponding
                                        rewards when they reach the VIP level
                                    </GreyText>
                                </Box>
                            </>
                        ) : (
                            <>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        height: "6.4375rem",

                                        mt: "2.625rem",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            height: "100%",

                                            width: "12%",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            alignItems: "flex-start",
                                        }}
                                    >
                                        <img src={activity_icon} alt="info" />
                                    </Box>
                                    <Box
                                        sx={{
                                            height: "100%",

                                            width: "84%",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "flex-start",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: "1.0625rem",
                                                fontWeight: 600,
                                                color: "white",
                                                fontFamily: "Montserrat",
                                            }}
                                        >
                                            ACTIVITY REQUIREMENTS
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "0.9375rem",
                                                fontWeight: 600,
                                                color: "#A7B0D6",
                                                fontFamily: "Montserrat",
                                            }}
                                        >
                                            Agents who invite new users with
                                            valid recharge will receive a super
                                            bonus for the invitation.
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        height: "6.4375rem",

                                        mt: "2.625rem",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            height: "100%",

                                            width: "11.5%",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            alignItems: "flex-start",
                                        }}
                                    >
                                        <img src={bonus_icon} alt="info" />
                                    </Box>
                                    <Box
                                        sx={{
                                            height: "100%",

                                            width: "84%",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "flex-start",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: "1.0625rem",
                                                fontWeight: 600,
                                                color: "white",
                                                fontFamily: "Montserrat",
                                            }}
                                        >
                                            EVENT BONUS
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "0.9375rem",
                                                fontWeight: 600,
                                                color: "#A7B0D6",
                                                fontFamily: "Montserrat",
                                            }}
                                        >
                                            Agents can also receive additional
                                            rewards for reaching different
                                            referral levels.
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",

                                        mt: "2.625rem",
                                        textAlign: "center",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "1.0625rem",
                                            fontWeight: 700,
                                            color: "white",
                                            fontFamily: "Montserrat",
                                        }}
                                    >
                                        Achievement Bonus
                                    </Typography>
                                </Box>
                            </>
                        )}

                        <Box
                            sx={{
                                width: { xs: "97%", md: "85%" },
                                height: { xs: "26.3rem", md: "36.1rem" },
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "2.1875rem",
                                marginBottom: "2.1875rem",
                                marginLeft: "auto",
                                marginRight: "auto",

                                "& .MuiDataGrid-columnHeaders": {
                                    backgroundColor: "#565F94",
                                },

                                "& .MuiDataGrid-columnHeaderTitleContainer": {
                                    display: "flex",
                                    alignItems: "center",
                                    textAlign: "center",
                                    justifyContent: "center",
                                },

                                "&  .MuiDataGrid-columnSeparator": {
                                    visibility: "hidden",
                                },

                                "& .MuiDataGrid-columnHeaderTitleContainerContent":
                                    {
                                        fontWeight: "700",
                                        fontSize: {
                                            xs: ".875rem",
                                            md: "1.125rem",
                                        },
                                    },

                                "& .MuiDataGrid-footerContainer": {
                                    display: "flex",
                                    alignItems: "center",
                                    textAlign: "center",
                                    justifyContent: "center",
                                    backgroundColor: "#3B4271",
                                    border: "1px solid purple",
                                },

                                "& .vip-column--cell": {
                                    backgroundColor: "#3B4271",
                                    fontFamily: "Montserrat",
                                    fontWeight: "700",
                                    fontSize: "0.9375rem",
                                    color: "#A7B0D6",
                                    textAlign: "center",
                                    display: "flex",
                                    justifyContent: "center !important",
                                    alignItems: "center",
                                    borderBottom: "1px solid black",
                                },

                                "& .amount-column--cell": {
                                    backgroundColor: "#3B4271",
                                    fontFamily: "Montserrat",
                                    fontWeight: "700",
                                    fontSize: "0.9375rem",
                                    color: "#FFF96A",
                                    textAlign: "center",
                                    display: "flex",
                                    justifyContent: "center !important",
                                    alignItems: "center",
                                    borderBottom: "1px solid black",
                                },

                                "& .MuiDataGrid-virtualScroller": {
                                    backgroundColor: "#3B4271",
                                },
                            }}
                        >
                            <DataGrid
                                sx={{
                                    borderRadius: "0.625rem",
                                    borderLeft: "none",
                                    borderRight: "none",
                                    borderBottom: "none",
                                    overflowX: "hidden",
                                }}
                                rows={
                                    !isMobile
                                        ? promotionsTableRows
                                        : activeUsersRows
                                }
                                columns={
                                    !isMobile
                                        ? promotionsTableColumns
                                        : activeUsersColumns
                                }
                                pageSize={10}
                                disableColumnFilter={true}
                                hideFooter={true}
                                hideFooterPagination={true}
                                disableColumnMenu={true}
                            />
                        </Box>
                        {!isMobile ? (
                            <>
                                {" "}
                                <Box
                                    sx={{
                                        width: "85%",
                                        height: "8.75rem",
                                        marginTop: "2.1875rem",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        border: "1.5px solid #3B5884",
                                        borderRadius: "0.625rem",
                                        textAlign: "center",
                                        paddingTop: "1.5625rem",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: "#FFF96A",
                                            fontSize: "1.125rem",
                                            fontWeight: "800",
                                        }}
                                    >
                                        Special Reminder
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "white",
                                            fontSize: "1rem",
                                            fontWeight: "700",
                                            display: "inline-block",
                                            marginTop: "0.9375rem",
                                            width: "80%",
                                        }}
                                    >
                                        Cada jogador pode receber o bônus
                                        correspondente a cada atualização, e o
                                        bônus pode ser sobreposto.
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        width: "85%",
                                        marginTop: "1rem",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        textAlign: "left",
                                        paddingTop: "1.5625rem",
                                        marginBottom: "2.5rem",
                                    }}
                                >
                                    <SemiBoldText weight={700}>
                                        <Box
                                            component="span"
                                            sx={{
                                                color: "#FFF96A",
                                                mr: ".625rem",
                                            }}
                                        >
                                            Detailed
                                        </Box>
                                        Description
                                    </SemiBoldText>
                                    <GreyText
                                        customStyles={{
                                            mt: "0.625rem",
                                            mb: "2.5rem",
                                        }}
                                        align={"left"}
                                    >
                                        Ensure the accuracy and uniqueness of
                                        your name, Contact information and CPF.
                                        If the same player uses different
                                        Network IPs to register multiple
                                        accounts and receive bonuses, This will
                                        be considered cheating and your account
                                        will be permanently frozen.
                                    </GreyText>
                                    <SemiBoldText weight={700}>
                                        <Box
                                            component="span"
                                            sx={{
                                                color: "#FFF96A",
                                                mr: ".625rem",
                                            }}
                                        >
                                            Instructions
                                        </Box>
                                        for participating in the event
                                    </SemiBoldText>
                                    <GreyText
                                        customStyles={{
                                            mt: "0.625rem",
                                            mb: "2.5rem",
                                        }}
                                        align={"left"}
                                    >
                                        From the day of the event announcement,
                                        you can only get the bonus if you
                                        upgrade your VIP
                                    </GreyText>
                                </Box>
                            </>
                        ) : (
                            <Box>
                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: "1rem",
                                        textAlign: "center",
                                    }}
                                >
                                    <span style={{ color: "#FFF96A" }}>
                                        Active users:
                                    </span>{" "}
                                    registered via your invite link and
                                    deposited When you reach the required number
                                    of active users, you will receive an
                                    additional bonus The more guests you have,
                                    the greater the bonus
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        height: "6.4375rem",

                                        mt: "1.625rem",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            height: "100%",

                                            width: "12%",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            alignItems: "flex-start",
                                        }}
                                    >
                                        <img src={bell_icon} alt="info" />
                                    </Box>
                                    <Box
                                        sx={{
                                            height: "100%",

                                            width: "84%",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "flex-start",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: "1rem",
                                                fontWeight: 600,
                                                color: "white",
                                                fontFamily: "Montserrat",
                                            }}
                                        >
                                            SPECIAL REMINDER
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "0.875rem",
                                                fontWeight: 600,
                                                color: "#A7B0D6",
                                                fontFamily: "Montserrat",
                                            }}
                                        >
                                            With no withdrawal requirements, the
                                            more users Agents invite and reload,
                                            the higher the rank and the greater
                                            the benefits.
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        height: "6.4375rem",

                                        mt: "1.625rem",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            height: "100%",

                                            width: "12%",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            alignItems: "flex-start",
                                        }}
                                    >
                                        <img src={details_icon} alt="info" />
                                    </Box>
                                    <Box
                                        sx={{
                                            height: "100%",

                                            width: "84%",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "flex-start",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: "1rem",
                                                fontWeight: 600,
                                                color: "white",
                                                fontFamily: "Montserrat",
                                            }}
                                        >
                                            DETAILS
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "0.875rem",
                                                fontWeight: 600,
                                                color: "#A7B0D6",
                                                fontFamily: "Montserrat",
                                            }}
                                        >
                                            Ensure the accuracy and uniqueness
                                            of your name, unique CPF If the same
                                            broker uses different network IPs to
                                            register multiple accounts and
                                            receive bonuses, this will be
                                            considered fraud and your account
                                            will be permanently frozen.
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        //height: "6.4375rem",
                                        height: "min-content",
                                        mt: "5.625rem",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            height: "100%",

                                            width: "12%",
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            alignItems: "flex-start",
                                        }}
                                    >
                                        <img src={infobook_sm} alt="info" />
                                    </Box>
                                    <Box
                                        sx={{
                                            height: "100%",

                                            width: "84%",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "flex-start",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: "1rem",
                                                fontWeight: 600,
                                                color: "white",
                                                fontFamily: "Montserrat",
                                            }}
                                        >
                                            INSTRUCTIONS FOR PARTICIPATING IN
                                            THE EVENT
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "0.9375rem",
                                                fontWeight: 600,
                                                color: "#A7B0D6",
                                                fontFamily: "Montserrat",
                                            }}
                                        >
                                            From the date of the announcement
                                            until the delivery of the prize of
                                            one million reais in bonuses.
                                            Official campaign rules are at
                                            BetDino’s sole discretion.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        )}
                    </PromotionPageWrapper>
                </PageTemplate>
            </GuestLayout>
        </>
    );
};

export default Exclusive;
