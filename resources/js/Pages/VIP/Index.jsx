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
import { styled } from "@mui/system";
import goldencup from "../../../../public/images/svg/goldencup.svg";
import target from "../../../../public/images/svg/target.svg";
const DividerStats = styled("div")(() => ({
    background: "linear-gradient(119.77deg, #262C55 2.99%, #454BCC 100%)",
    borderRadius: "10px",
    width: "100%",
    height: "100px",
    marginTop: "50px",
}));

const BgWithText = styled("div")(({color}) => ({
    background: "#2D3058",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    width: "fit-content",
    position: "relative",
    "& p": {
        "&:first-child": {
            fontSize: "100px",
            fontWeight: "bold",
            lineHeight: "100px",
            fontFamily: 'Montserrat, "Helvetica", "Arial", sans-serif',
            background:
                `linear-gradient(127.1deg, #58FFEB 17.29%, ${color} 87.58%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
        },
        "&:last-child": {
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
}));

const VIPIndex = () => {
    const { isMobile } = useScreenResolution();
    return (
        <>
            <Head title="VIP Rank System" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <ImageGridLayout
                        item={{ title: "VIP Rank System", icon: goldencup }}
                        index={0}
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
                                gap="40px"
                            >
                                <MyVIPLevel />
                                <FullVIPBonus />
                            </Flex>
                        </div>
                        <DividerStats>
                            <Flex
                                alignItems="flex-start"
                                justifyContent="space-between"
                                padding="10px 5%"
                            >
                                <div>
                                    <img
                                        src={target}
                                        alt=""
                                        style={{ marginTop: "-36px" }}
                                    />
                                </div>
                                <Flex alignItems="center" gap="20px">
                                    <TextWithBg
                                        bg="#4F5DFE"
                                        primaryText="Original Games"
                                        secondaryText={"R$ 0"}
                                    />
                                    <TextWithBg
                                        bg={"#4F5DFE"}
                                        primaryText="Accumulated Deposit Amount"
                                        secondaryText={"R$ 100"}
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
                                    },
                                ].map((item, index) => (
                                    <BgWithText key={index} color={item.color}>
                                        <Text type="p" text={item.count} />
                                        <Text type="p" text={item.text} />
                                    </BgWithText>
                                ))}
                            </Flex>
                        </div>

                        <VipCarousel />
                    </ImageGridLayout>
                </PageTemplate>
            </GuestLayout>
        </>
    );
};

export default VIPIndex;
