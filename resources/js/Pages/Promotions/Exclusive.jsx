import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import img from "../../../assets/promotions/exclusive_pro_background.svg";
import activity from "../../../assets/promotions/promotion_activity.svg";
import { promotionsTableColumns, promotionsTableRows } from "@/data/promotions";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import BoldText from "@/Components/Promotions/Typography/BoldText";
import SemiBoldText from "@/Components/Promotions/Typography/SemiBoldText";
import GreyText from "@/Components/Promotions/Typography/GreyText";
import PromotionsHeader from "@/Components/Promotions/header";

const PromotionPageWrapper = styled("div")(() => ({
    background: "#1D2036",
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "34px",
    paddingLeft: "25px",
    paddingRight: "25px",
    paddingBottom: "34px",
    height: "80%",
}));

const HEADER_TEXT = "Exclusive VIP Bonus";

const Exclusive = () => {
    return (
        <>
            <Head title="Promotion Exclusive" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <PromotionPageWrapper>
                        <PromotionsHeader
                            imgUrl={img}
                            headerText={HEADER_TEXT}
                        />
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
                            <GreyText>
                                To give back to all Bcboom users, the VIP reward
                                mechanism is now open. As long as you can meet
                                the requirements, you can receive generous
                                bonuses!
                            </GreyText>
                        </Box>
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
                                Players upgrade to a new VIP level you will get
                                free bonus, no withdrawal requirements.
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
                                Players can receive corresponding rewards when
                                they reach the VIP level
                            </GreyText>
                        </Box>
                        <Box
                            sx={{
                                width: "85%",
                                height: "36.1rem",
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
                                rows={promotionsTableRows}
                                columns={promotionsTableColumns}
                                pageSize={10}
                                disableColumnFilter={true}
                                hideFooter={true}
                                hideFooterPagination={true}
                                disableColumnMenu={true}
                            />
                        </Box>
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
                                Cada jogador pode receber o bônus correspondente
                                a cada atualização, e o bônus pode ser
                                sobreposto.
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
                                    sx={{ color: "#FFF96A", mr: ".625rem" }}
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
                                Ensure the accuracy and uniqueness of your name,
                                Contact information and CPF. If the same player
                                uses different Network IPs to register multiple
                                accounts and receive bonuses, This will be
                                considered cheating and your account will be
                                permanently frozen.
                            </GreyText>
                            <SemiBoldText weight={700}>
                                <Box
                                    component="span"
                                    sx={{ color: "#FFF96A", mr: ".625rem" }}
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
                                From the day of the event announcement, you can
                                only get the bonus if you upgrade your VIP
                            </GreyText>
                        </Box>
                    </PromotionPageWrapper>
                </PageTemplate>
            </GuestLayout>
        </>
    );
};

export default Exclusive;
