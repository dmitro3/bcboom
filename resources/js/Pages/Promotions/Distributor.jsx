import PromotionsHeader from "@/Components/Promotions/header";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import img from "../../../assets/promotions/distributor_pro_background.svg";
import img_sm from "../../../assets/promotions/pro_dist_sm.svg";
import activity from "../../../assets/promotions/activity.svg";
import bonus from "../../../assets/promotions/bonus.svg";
import info from "../../../assets/promotions/info.svg";
import bell from "../../../assets/promotions/bell.svg";
import infoBook from "../../../assets/promotions/infoBook.svg";
import { styled } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { activeUsersColumns, activeUsersRows } from "@/data/promotions";
import React from "react";
import SemiBoldText from "@/Components/Promotions/Typography/SemiBoldText";
import { Box } from "@mui/material";
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

const HEADER_TEXT = "Millions of Distributor Benefits";

const Distributor = () => {
    return (
        <>
            <Head title="Promotions Distributor" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <PromotionPageWrapper>
                        <PromotionsHeader
                            imgUrl={img}
                            imgUrL_sm={img_sm}
                            headerText={HEADER_TEXT}
                            customImageStyles={{
                                py: "40px",
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
                                    Millions
                                </Box>
                                of Distributor Benefits
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
                                width: "100%",
                                display: "flex",
                                justifyContent: {
                                    xs: "left",
                                    sm: "left",
                                    md: "center",
                                    lg: "center",
                                    xl: "center",
                                },
                                alignItems: "center",
                                marginTop: "4.5625rem",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    width: { xs: "95%", md: "80%" },

                                    flexDirection: {
                                        xs: "column",
                                        sm: "column",
                                        md: "row",
                                        lg: "row",
                                        xl: "row",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        borderRight: {
                                            xs: "none",
                                            sm: "none",
                                            md: "1px solid #555F8D",
                                            lg: "1px solid #555F8D",
                                            xl: "1px solid #555F8D",
                                        },

                                        paddingLeft: {
                                            xs: "2.0625rem",
                                            sm: "2.0625rem",
                                            md: "4.0625rem",
                                            lg: "4.0625rem",
                                            xl: "4.0625rem",
                                        },
                                        paddingRight: "4.0625rem",
                                        width: {
                                            xs: "100%",
                                            sm: "100%",
                                            md: "50%",
                                            lg: "50%",
                                            xl: "50%",
                                        },

                                        alignItems: {
                                            xs: "flex-start",
                                            sm: "row",
                                            md: "center",
                                            lg: "center",
                                            xl: "center",
                                        },
                                        justifyContent: "center",
                                        flexDirection: {
                                            xs: "row",
                                            sm: "row",
                                            md: "column",
                                            lg: "column",
                                            xl: "column",
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: {
                                                xs: "left",
                                                sm: "left",
                                                md: "center",
                                                lg: "center",
                                                xl: "center",
                                            },
                                            alignItems: "center",
                                            pt: "1rem",
                                            width: {
                                                xs: "75px",
                                                sm: "75px",
                                                md: "45px",
                                                lg: "45px",
                                                xl: "35px",
                                            },
                                            height: {
                                                xs: "75px",
                                                sm: "75px",
                                                md: "45px",
                                                lg: "45px",
                                                xl: "35px",
                                            },
                                        }}
                                    >
                                        <img
                                            style={{
                                                height: "100%",
                                                width: "100%",
                                            }}
                                            src={activity}
                                        />
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: {
                                                xs: "flex-start",
                                                sm: "flex-start",
                                                md: "center",
                                                lg: "center",
                                                xl: "center",
                                            },
                                            alignItems: {
                                                xs: "flex-start",
                                                sm: "flex-start",
                                                md: "center",
                                                lg: "center",
                                                xl: "center",
                                            },
                                            paddingTop: "0.9375rem",
                                            paddingBottom: "0.9375rem",
                                            flexDirection: "column",
                                            textAlign: {
                                                xs: "left",
                                                sm: "left",
                                                md: "center",
                                                lg: "center",
                                                xl: "center",
                                            },

                                            ml: "1rem",
                                        }}
                                    >
                                        <SemiBoldText
                                            customStyles={{
                                                fontWeight: "600",
                                                fontSize: "1rem",
                                                textAlign: {
                                                    xs: "left",
                                                    sm: "left",
                                                    md: "center",
                                                    lg: "center",
                                                    xl: "center",
                                                },
                                            }}
                                        >
                                            ACTIVITY REQUIREMENTS
                                        </SemiBoldText>
                                        <GreyText
                                            customStyles={{
                                                fontWeight: "600",
                                                fontSize: "0.9375rem",
                                                textAlign: {
                                                    xs: "left",
                                                    sm: "left",
                                                    md: "center",
                                                    lg: "center",
                                                    xl: "center",
                                                },
                                            }}
                                        >
                                            Agents who invite new users with
                                            valid recharge will receive a super
                                            bonus for the invitation.
                                        </GreyText>
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        paddingLeft: {
                                            xs: "2.0625rem",
                                            sm: "2.0625rem",
                                            md: "4.0625rem",
                                            lg: "4.0625rem",
                                            xl: "4.0625rem",
                                        },
                                        paddingRight: "4.0625rem",
                                        width: {
                                            xs: "100%",
                                            sm: "100%",
                                            md: "50%",
                                            lg: "50%",
                                            xl: "50%",
                                        },

                                        alignItems: {
                                            xs: "flex-start",
                                            sm: "row",
                                            md: "center",
                                            lg: "center",
                                            xl: "center",
                                        },
                                        justifyContent: "center",
                                        flexDirection: {
                                            xs: "row",
                                            sm: "row",
                                            md: "column",
                                            lg: "column",
                                            xl: "column",
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: {
                                                xs: "left",
                                                sm: "left",
                                                md: "center",
                                                lg: "center",
                                                xl: "center",
                                            },

                                            alignItems: "center",
                                            //pt: "1rem",
                                            width: {
                                                xs: "75px",
                                                sm: "75px",
                                                md: "45px",
                                                lg: "45px",
                                                xl: "35px",
                                            },
                                            height: {
                                                xs: "75px",
                                                sm: "75px",
                                                md: "45px",
                                                lg: "45px",
                                                xl: "35px",
                                            },
                                        }}
                                    >
                                        <img src={bonus} />
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: {
                                                xs: "flex-start",
                                                sm: "flex-start",
                                                md: "center",
                                                lg: "center",
                                                xl: "center",
                                            },
                                            alignItems: {
                                                xs: "flex-start",
                                                sm: "flex-start",
                                                md: "center",
                                                lg: "center",
                                                xl: "center",
                                            },
                                            paddingTop: "0.9375rem",
                                            paddingBottom: "0.9375rem",
                                            flexDirection: "column",
                                            textAlign: {
                                                xs: "left",
                                                sm: "left",
                                                md: "center",
                                                lg: "center",
                                                xl: "center",
                                            },

                                            ml: "1rem",
                                        }}
                                    >
                                        <SemiBoldText
                                            customStyles={{
                                                fontWeight: "600",
                                                fontSize: "1rem",
                                                textAlign: {
                                                    xs: "left",
                                                    sm: "left",
                                                    md: "center",
                                                    lg: "center",
                                                    xl: "center",
                                                },
                                            }}
                                        >
                                            EVENT BONUS
                                        </SemiBoldText>
                                        <GreyText
                                            customStyles={{
                                                fontWeight: "600",
                                                fontSize: "0.9375rem",
                                                textAlign: {
                                                    xs: "left",
                                                    sm: "left",
                                                    md: "center",
                                                    lg: "center",
                                                    xl: "center",
                                                },
                                            }}
                                        >
                                            Agents can also receive additional
                                            rewards for reaching different
                                            referral levels.
                                        </GreyText>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                marginTop: "4.5625rem",
                            }}
                        >
                            <SemiBoldText weight={700}>
                                Achievement Bonus
                            </SemiBoldText>
                        </Box>
                        <Box
                            sx={{
                                width: { xs: "98%", md: "85%" },
                                height: "26.4rem",
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
                                    fontWeight: "700",
                                },

                                "& .MuiDataGrid-columnHeaderTitleContainerContent":
                                    {
                                        fontWeight: "700",
                                        fontSize: "1.125rem",
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

                                "&  .MuiDataGrid-columnSeparator": {
                                    visibility: "hidden",
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
                                rows={activeUsersRows}
                                columns={activeUsersColumns}
                                pageSize={10}
                                disableColumnFilter={true}
                                hideFooter={true}
                                hideFooterPagination={true}
                                disableColumnMenu={true}
                            />
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    width: { xs: "98%", md: "80%" },
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    textAlign: "center",
                                }}
                            >
                                <SemiBoldText
                                    customStyles={{
                                        fontWeight: "700",
                                    }}
                                >
                                    <Box
                                        component={"span"}
                                        sx={{
                                            color: "#FFF96A",
                                            fontSize: "1.125rem",
                                            mr: "0.5rem",
                                        }}
                                    >
                                        Active users:
                                    </Box>
                                    <Box
                                        component={"span"}
                                        sx={{
                                            fontSize: "1rem",
                                        }}
                                    >
                                        registered via your invite link and
                                        deposited When you reach the required
                                        number of active users, you will receive
                                        an additional bonus The more guests you
                                        have, the greater the bonus
                                    </Box>
                                </SemiBoldText>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "4.5625rem",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    width: { xs: "98%", md: "80%" },
                                    flexWrap: "wrap",
                                    justifyContent: "center",
                                    flexDirection: {
                                        xs: "column",
                                        sm: "column",
                                        md: "row",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        borderRight: "1px solid #555F8D",
                                        paddingRight: "4.0625rem",
                                        width: {
                                            xs: "100%",
                                            md: "50%",
                                        },
                                        alignItems: {
                                            xs: "flex-start",
                                            md: "center",
                                        },
                                        justifyContent: "center",
                                        flexDirection: {
                                            xs: "row",
                                            md: "column",
                                        },
                                        transform: "translateY(-1.3rem)",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: {
                                                xs: "flex-start",
                                                md: "center",
                                            },

                                            width: {
                                                xs: "75px",
                                                sm: "75px",
                                                md: "45px",
                                                lg: "45px",
                                                xl: "35px",
                                            },
                                            height: {
                                                xs: "75px",
                                                sm: "75px",
                                                md: "45px",
                                                lg: "45px",
                                                xl: "35px",
                                            },
                                            mr: "1rem",
                                        }}
                                    >
                                        <img src={bell} />
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: {
                                                xs: "left",
                                                md: "center",
                                            },
                                            alignItems: {
                                                xs: "flex-start",
                                                md: "center",
                                            },
                                            paddingTop: {
                                                xs: "0",
                                                md: "0.9375rem",
                                            },
                                            paddingBottom: "0.9375rem",
                                            flexDirection: "column",

                                            textAlign: "left",
                                        }}
                                    >
                                        <SemiBoldText
                                            customStyles={{
                                                fontWeight: "600",
                                                fontSize: "1rem",
                                                textAlign: {
                                                    xs: "left",
                                                    md: "center",
                                                },
                                            }}
                                        >
                                            SPECIAL REMINDER
                                        </SemiBoldText>
                                        <GreyText
                                            customStyles={{
                                                fontWeight: "600",
                                                fontSize: "0.9375rem",
                                                paddingTop: "0.5rem",
                                                textAlign: {
                                                    xs: "left",
                                                    md: "center",
                                                },
                                            }}
                                        >
                                            With no withdrawal requirements, the
                                            more users Agents invite and reload,
                                            the higher the rank and the greater
                                            the benefits.
                                        </GreyText>
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        paddingRight: "4.0625rem",
                                        paddingLeft: {
                                            xs: "0",
                                            md: "4.0625rem",
                                        },

                                        width: {
                                            xs: "98%",
                                            md: "50%",
                                        },
                                        alignItems: {
                                            xs: "flex-start",
                                            md: "center",
                                        },
                                        justifyContent: "center",
                                        flexDirection: {
                                            xs: "row",
                                            md: "column",
                                        },
                                        transform: "translateY(-1.3rem)",
                                        mt: {
                                            xs: "1rem",
                                            md: 0,
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: {
                                                xs: "flex-start",
                                                md: "center",
                                            },

                                            width: {
                                                xs: "95px",
                                                sm: "95px",
                                                md: "45px",
                                                lg: "45px",
                                                xl: "35px",
                                            },
                                            height: {
                                                xs: "75px",
                                                sm: "75px",
                                                md: "45px",
                                                lg: "45px",
                                                xl: "35px",
                                            },
                                            mr: "1rem",
                                        }}
                                    >
                                        <img src={info} />
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: {
                                                xs: "left",
                                                md: "center",
                                            },
                                            alignItems: {
                                                xs: "flex-start",
                                                md: "center",
                                            },
                                            paddingTop: {
                                                xs: "0",
                                                md: "0.9375rem",
                                            },
                                            paddingBottom: "0.9375rem",
                                            flexDirection: "column",

                                            textAlign: "left",
                                        }}
                                    >
                                        <SemiBoldText
                                            customStyles={{
                                                fontWeight: "600",
                                                fontSize: "1rem",
                                                textAlign: {
                                                    xs: "left",
                                                    md: "center",
                                                },
                                            }}
                                        >
                                            DETAILS
                                        </SemiBoldText>
                                        <GreyText
                                            customStyles={{
                                                fontWeight: "600",
                                                fontSize: "0.9375rem",
                                                paddingTop: "0.5rem",
                                                textAlign: {
                                                    xs: "left",
                                                    md: "center",
                                                },
                                            }}
                                        >
                                            Ensure the accuracy and uniqueness
                                            of your name, unique CPF If the same
                                            broker uses different network IPs to
                                            register multiple accounts and
                                            receive bonuses, this will be
                                            considered fraud and your account
                                            will be permanently frozen.
                                        </GreyText>
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        paddingRight: "4.0625rem",
                                        paddingLeft: {
                                            xs: "0",
                                            md: "4.0625rem",
                                        },

                                        width: {
                                            xs: "98%",
                                            md: "50%",
                                        },
                                        alignItems: {
                                            xs: "flex-start",
                                            md: "center",
                                        },
                                        justifyContent: "center",
                                        flexDirection: {
                                            xs: "row",
                                            md: "column",
                                        },
                                        transform: "translateY(-1.3rem)",
                                        mt: {
                                            xs: "1rem",
                                            md: 0,
                                        },
                                        pt: {
                                            xs: 0,
                                            md: "2rem",
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: {
                                                xs: "flex-start",
                                                md: "center",
                                            },

                                            width: {
                                                xs: "95px",
                                                sm: "95px",
                                                md: "45px",
                                                lg: "45px",
                                                xl: "35px",
                                            },
                                            height: {
                                                xs: "75px",
                                                sm: "75px",
                                                md: "45px",
                                                lg: "45px",
                                                xl: "35px",
                                            },
                                            mr: "1rem",
                                        }}
                                    >
                                        <img src={infoBook} />
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: {
                                                xs: "left",
                                                md: "center",
                                            },
                                            alignItems: {
                                                xs: "flex-start",
                                                md: "center",
                                            },
                                            paddingTop: {
                                                xs: "0",
                                                md: "0.9375rem",
                                            },
                                            paddingBottom: "0.9375rem",
                                            flexDirection: "column",

                                            textAlign: "left",
                                        }}
                                    >
                                        <SemiBoldText
                                            customStyles={{
                                                fontWeight: "600",
                                                fontSize: "1rem",
                                                textAlign: {
                                                    xs: "left",
                                                    md: "center",
                                                },
                                            }}
                                        >
                                            INSTRUCTIONS FOR PARTICIPATING IN
                                            THE EVENT
                                        </SemiBoldText>
                                        <GreyText
                                            customStyles={{
                                                fontWeight: "600",
                                                fontSize: "0.9375rem",
                                                paddingTop: "0.5rem",
                                                textAlign: {
                                                    xs: "left",
                                                    md: "center",
                                                },
                                            }}
                                        >
                                            From the date of the announcement
                                            until the delivery of the prize of
                                            one million reais in bonuses.
                                            Official campaign rules are at
                                            BetDino’s sole discretion.
                                        </GreyText>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </PromotionPageWrapper>
                </PageTemplate>
            </GuestLayout>
        </>
    );
};

export default Distributor;
