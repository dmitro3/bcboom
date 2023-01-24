import FullVIPBonus from "@/Components/Cards/FullVIPBonus";
import MyVIPLevel from "@/Components/Cards/VIPLevel";
import VipCarousel from "@/Components/Carousel/carousels/VipCarousel";
import ImageGridLayout from "@/Components/ImageGrid/ImageGridLayout";
import Text from "@/Components/Text/Text";
import { Flex } from "@/Components/UtilComponents/Flex";
import TextWithBg from "@/Components/UtilComponents/TextWithBg";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import { Tooltip } from "@mui/material";
import { styled as MuiStyle } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";
import faq from "../../../../public/images/svg/faq.svg";
import goldencup from "../../../../public/images/svg/goldencup.svg";
import target from "../../../../public/images/svg/target.svg";

const DividerStats = styled("div")(({ isMobile }) => ({
    background: "linear-gradient(119.77deg, #262C55 2.99%, #454BCC 100%)",
    borderRadius: "10px",
    width: "100%",
    height: isMobile ? "fit-content" : "100px",
    marginTop: "50px",
}));

const BgWithText = styled("div")(({ color }) => ({
    background: "#2D3058",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    width: "fit-content",
    position: "relative",
    zIndex: "10",
    "& p": {
        "&:first-child": {
            fontSize: "100px",
            fontWeight: "bold",
            lineHeight: "100px",
            fontFamily: 'Montserrat, "Helvetica", "Arial", sans-serif',
            background: `linear-gradient(127.1deg, #58FFEB 17.29%, ${color} 87.58%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
        },
        "&:nth-child(2)": {
            fontSize: "12px",
            color: "white",
        },
    },

    "&::before": {
        content: '""',
        position: "absolute",
        top: "20%",
        left: "30%",
        width: "50%",
        height: "50%",
        // background: 'red',
        background: `${color}`,
        filter: "blur(90px)",
        borderRadius: "10px 0px 50px",
        opacity: "0.8",
        zIndex: 1,
    },

    "& img": {
        position: "absolute",
        top: "5%",
        right: "5%",
    },
}));
const BcTooltip = MuiStyle(({ className, ...props }) => (
    <Tooltip
        {...props}
        componentsProps={{ tooltip: { className: className } }}
    />
))(`
    color: white;
    background-color: #181E46;
    font-size: 11px;
    font-family: Montserrat;
    padding: 15px;
    line-height: 2;
`);

const useStyles = makeStyles((theme) => ({
    arrow: {
        "&:before": {
            border: "1px solid white",
        },
        color: "#1D2036",
    },
    tooltip: {
        backgroundColor: "#1D2036",
        border: "1px solid #E6E8ED",
        color: "white",
    },
}));
const VIPIndex = () => {
    let classes = useStyles();
    const { isMobile } = useScreenResolution();
    return (
        <>
            <Head title="VIP Rank System" />
            {/* <GuestLayout> */}
                <PageTemplate innerHeader={true}>
                    <ImageGridLayout
                        item={{
                            title: "VIP Rank System",
                            icon: goldencup,
                            margin: "10px",
                        }}
                        index={0}
                        page="vip"
                    >
                        <div
                            style={{
                                marginTop: "60px",
                                zIndex: 500,
                                position: "relative",
                            }}
                        >
                            <Flex
                                alignItems="normal"
                                justifyContent="stretch"
                                direction={isMobile ? "column" : "row"}
                                gap="40px"
                            >
                                <MyVIPLevel />
                                <FullVIPBonus />
                            </Flex>
                        </div>
                        <DividerStats isMobile={isMobile}>
                            <Flex
                                alignItems={isMobile ? "center" : "start"}
                                // alignItems="center"
                                justifyContent="space-between"
                                padding="10px 5%"
                            >
                                <div>
                                    <img
                                        src={target}
                                        alt=""
                                        style={{
                                            marginTop: !isMobile && "-36px",
                                            width: isMobile && "150px",
                                        }}
                                    />
                                </div>
                                <Flex
                                    alignItems="center"
                                    gap={isMobile ? "5px" : "20px"}
                                    direction={isMobile ? "column" : "row"}
                                >
                                    <TextWithBg
                                        bg="#4F5DFE"
                                        primaryText="Original Games"
                                        secondaryText={"R$ 0"}
                                        primaryTextSize={isMobile && "12px"}
                                        padding={isMobile && "5px 20px"}
                                        width={isMobile && "100%"}
                                    />
                                    <TextWithBg
                                        width={isMobile && "100%"}
                                        primaryTextSize={isMobile && "12px"}
                                        padding={isMobile && "5px 20px"}
                                        bg={"#4F5DFE"}
                                        primaryText="Accumulated Deposit Amount"
                                        secondaryText={"R$ 100"}
                                        nowrap
                                    />
                                </Flex>
                            </Flex>
                        </DividerStats>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "0 5%",
                            }}
                        >
                            <Flex
                                alignItems="center"
                                gap="50px"
                                direction={isMobile ? "column" : "row"}
                                margin="100px 0 50px 0"
                            >
                                {[
                                    {
                                        count: "01",
                                        text: "Place a bet on an original or LIVE game and the MONEY BACK engine will automatically calculate the return value based on your VIP level as you enjoy the game.",
                                        color: "#3DFAD8",
                                    },
                                    {
                                        count: "02",
                                        text: "The cash back mechanism will be settled on your account balance at 0:00 based on your bets placed throughout the day.",
                                        color: "#3D89FA",
                                    },
                                    {
                                        count: "03",
                                        text: "The more you play, the higher your money back, for example your [VIP1] cumulative level bet of €10,000 will bring you a €20 back bonus. (The return for vip10 is R$50)",
                                        color: "#FA3D5F",
                                        tooltip: true,
                                    },
                                ].map((item, index) => (
                                    <BgWithText key={index} color={item.color}>
                                        <Text type="p" text={item.count} />
                                        <Text type="p" text={item.text} />
                                        {item.tooltip && (
                                            <BcTooltip
                                                title="60% of Bcboom users can easily reach a cumulative value of over R$10,000 per day. The cumulative bet amount is calculated regardless of whether the bet is a win or a loss."
                                                placement="bottom-start"
                                                arrow
                                                classes={{
                                                    arrow: classes.arrow,
                                                    tooltip: classes.tooltip,
                                                }}
                                            >
                                                <img
                                                    src={faq}
                                                    alt="tooltip"
                                                    style={{
                                                        marginLeft: "10px",
                                                        cursor: "pointer",
                                                    }}
                                                />
                                            </BcTooltip>
                                        )}
                                    </BgWithText>
                                ))}
                            </Flex>
                        </div>

                        <VipCarousel />
                    </ImageGridLayout>
                </PageTemplate>
            {/* </GuestLayout> */}
        </>
    );
};

export default VIPIndex;
