import ImageGridLayout from "@/Components/ImageGrid/ImageGridLayout";
import Text from "@/Components/Text/Text";
import { Flex } from "@/Components/UtilComponents/Flex";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import GuestLayout from "@/Layouts/GuestLayout";
import PageTemplate from "@/Layouts/templates/PageTemplate";
import { Head } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import centerIcon from "../../../../public/images/user/userIcon.svg";
import pad from "../../../../public/images/svg/pad.svg";
import avatarIcon from "../../../../public/images/user/useravatarwithbg.png";
import level1 from "../../../../public/images/levels/level1.svg";
import link from "../../../../public/images/svg/link.svg";
import wallet from "../../../../public/images/svg/walletmini.svg";
import settings from "../../../../public/images/svg/settings.svg";
import TextWithBg from "@/Components/UtilComponents/TextWithBg";
import { Divider } from "@/Components/Divider/Divider";
import Button from "@/Components/Button/Button";
const PersonalCenterPageWrapper = styled("div")(() => ({
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "2.125rem",
    width: "100%",
    height: "100%",
    position: "relative",
    zIndex: 100,
}));

const PersonalCard = styled("div")(({ padding, isMobile }) => ({
    zIndex: 1000,
    background: "linear-gradient(119.77deg, #272C56 2.99%, #444AC7 100%)",
    borderRadius: "10px",
    width: isMobile ? "100%" : "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: padding || "20px",
}));

const RangeInput = styled("div")(() => ({
    width: "100%",
    "& input[type='range']": {
        overflow: "hidden",
        borderRadius: "10px",
        WebkitAppearance: "none",
        backgroundColor: "#172C4F",
    },
    "& input[type='range']::-webkit-slider-runnable-track": {
        height: "20px",
        WebkitAppearance: "none",
        color: "blue",
        marginTop: "-1px",
    },
    "& input[type='range']::-webkit-slider-thumb": {
        width: "10px",
        WebkitAppearance: "none",
        height: "10px",
        cursor: "ew-resize",
        background: "#434343",
        display: "none",
    },
}));

const TextWithIcon = ({ icon, text, width, height }) => {
    return (
        <div
            style={{
                background: "#191C51",
                borderRadius: "10px",
                padding: "5px 10px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                justifyContent: "center",
                width: width ? width : "100%",
                height: height ? height : "auto",
            }}
        >
            <Flex alignItems="center" gap="7px">
                <img src={icon} alt="" style={{ height: "15px" }} />
                <Text
                    type="p"
                    text={text}
                    fontSize="14px"
                    color="#A0ABDB"
                    fontWeight="500"
                />
            </Flex>
        </div>
    );
};
const CenterRange = () => {
    return (
        <div style={{}}>
            <Flex justifyContent="space-between" width="80%">
                <Text
                    type="p"
                    text="Deposit"
                    fontSize="15px"
                    fontWeight="bold"
                />
                <Flex alignItems="center" gap="3px">
                    <Text
                        type="p"
                        text="R$0"
                        fontSize="15px"
                        fontWeight="bold"
                    />
                    <small>/</small>
                    <Text
                        type="p"
                        text="R$100"
                        fontSize="15px"
                        fontWeight="bold"
                        color="#FFCD4D"
                    />
                </Flex>
            </Flex>
            <RangeInput
                style={{
                    width: "80%",
                    marginTop: "10px",
                }}
            >
                <Flex alignItems="center" gap="6px">
                    <input
                        type="range"
                        max={100}
                        min={0}
                        value={10}
                        style={{ width: "100%" }}
                    />
                    <Text text="0%" type="p" fontWeight="bold" />
                </Flex>
            </RangeInput>
        </div>
    );
};
const PersonalCenter = () => {
    const { isMobile } = useScreenResolution();
    return (
        <>
            <Head title="Personal Center" />
            <GuestLayout>
                <PageTemplate innerHeader={true}>
                    <PersonalCenterPageWrapper>
                        <ImageGridLayout
                            item={{
                                title: "Personal Center",
                                icon: centerIcon,
                                margin: '10px'
                            }}
                            index={0}
                            page="personal-center"
                        >
                            <Flex
                                alignItems="stretch"
                                gap="20px"
                                direction={isMobile ? "column" : "row"}
                                margin={isMobile ? '60px 0 0' : "60px 0"}
                            >
                                <PersonalCard isMobile={isMobile}>
                                    <Text
                                        type="p"
                                        text="Personal Information"
                                        fontSize="18px"
                                        color="white"
                                        fontWeight="700"
                                        paddingBottom="20px"
                                    />
                                    <Flex
                                        gap="30px"
                                        alignItems="center"
                                        margin="0 0 20px 0"
                                    >
                                        <img src={avatarIcon} alt="" />
                                        <div style={{ textAlign: "center" }}>
                                            <Text
                                                type={"p"}
                                                text={"User323123131313"}
                                                fontSize={"15px"}
                                                color={"white"}
                                                fontWeight={"700"}
                                                paddingBottom={"10px"}
                                            />
                                            <TextWithIcon
                                                icon={link}
                                                text="Copy"
                                            />
                                            <Text
                                                type={"p"}
                                                text="Change Avatar"
                                                fontSize={"14px"}
                                                color="#A0ABDB"
                                            />
                                        </div>
                                    </Flex>

                                    <TextWithIcon
                                        icon={settings}
                                        text="Change Nickname"
                                        width="80%"
                                        height="40px"
                                    />
                                    <br />
                                    <TextWithIcon
                                        icon={pad}
                                        height="40px"
                                        text="Game History"
                                        width="80%"
                                    />
                                </PersonalCard>

                                <PersonalCard
                                    padding="20px 20px 0 20px"
                                    isMobile={isMobile}
                                >
                                    <Text
                                        type="p"
                                        text="My VIP Level"
                                        fontSize="18px"
                                        color="white"
                                        fontWeight="700"
                                        paddingBottom="20px"
                                    />
                                    <div style={{ textAlign: "center" }}>
                                        <img src={level1} alt="" />
                                    </div>
                                    <Flex
                                        justifyContent="space-between"
                                        width="80%"
                                    >
                                        <Text
                                            type="p"
                                            text="Deposit Amount"
                                            fontSize="15px"
                                            fontWeight="bold"
                                        />
                                        <Flex alignItems="center" gap="3px">
                                            <Text
                                                type="p"
                                                text="R$0"
                                                fontSize="15px"
                                                fontWeight="bold"
                                            />
                                            <small>/</small>
                                            <Text
                                                type="p"
                                                text="R$100"
                                                fontSize="15px"
                                                fontWeight="bold"
                                                color="#64A2FF"
                                            />
                                        </Flex>
                                    </Flex>
                                    <RangeInput
                                        style={{
                                            width: "80%",
                                            marginTop: "10px",
                                        }}
                                    >
                                        <Flex alignItems="center" gap="6px">
                                            <input
                                                type="range"
                                                max={100}
                                                min={0}
                                                value={10}
                                                style={{ width: "100%" }}
                                            />
                                            <Text
                                                text="0%"
                                                type="p"
                                                fontWeight="bold"
                                            />
                                        </Flex>
                                    </RangeInput>
                                    <br />
                                    <Flex
                                        justifyContent="space-between"
                                        width="80%"
                                    >
                                        <Text
                                            type="p"
                                            text="Bet amount"
                                            fontSize="15px"
                                            fontWeight="bold"
                                        />
                                        <Flex alignItems="center" gap="3px">
                                            <Text
                                                type="p"
                                                text="R$0"
                                                fontSize="15px"
                                                fontWeight="bold"
                                            />
                                            <small>/</small>
                                            <Text
                                                type="p"
                                                text="R$100"
                                                fontSize="15px"
                                                fontWeight="bold"
                                                color="#64A2FF"
                                            />
                                        </Flex>
                                    </Flex>
                                    <RangeInput
                                        style={{
                                            width: "80%",
                                            marginTop: "10px",
                                        }}
                                    >
                                        <Flex alignItems="center" gap="6px">
                                            <input
                                                type="range"
                                                max={100}
                                                min={0}
                                                value={10}
                                                style={{ width: "100%" }}
                                            />
                                            <Text
                                                text="0%"
                                                type="p"
                                                fontWeight="bold"
                                            />
                                        </Flex>
                                    </RangeInput>
                                    <Text
                                        type="p"
                                        text="View Rank System"
                                        color="#A0ABDB"
                                        fontSize="13px"
                                        paddingTop="20px"
                                        cursor="pointer"
                                    />
                                </PersonalCard>

                                <PersonalCard
                                    padding="20px 40px 0 40px"
                                    isMobile={isMobile}
                                >
                                    <Text
                                        type="p"
                                        text="Wallets"
                                        fontSize="18px"
                                        color="white"
                                        fontWeight="700"
                                        paddingBottom="20px"
                                    />
                                    <Text
                                        type="p"
                                        text="R$"
                                        fontSize="18px"
                                        color="white"
                                        fontWeight="700"
                                        paddingBottom="20px"
                                    />
                                    <Text
                                        type="p"
                                        text="0"
                                        fontSize="28px"
                                        color="#64A2FF"
                                        fontWeight="700"
                                        paddingBottom="20px"
                                    />
                                    <Flex
                                        justifyContent="space-between"
                                        alignItems="center"
                                        width='100%'
                                        gap="20px"
                                    >
                                        <TextWithBg
                                            bg="#191C51"
                                            primaryText="BET"
                                            secondaryText="R$ 50"
                                            secondaryTextSize={"14px"}
                                            primaryTextSize={"12px"}
                                            whiteSpace="nowrap"
                                            padding={
                                                isMobile
                                                    ? "10px 20px"
                                                    : "10px 45px"
                                            }
                                        />
                                        <TextWithBg
                                            secondaryTextSize={"14px"}
                                            primaryTextSize={"12px"}
                                            padding="10px 45px"
                                            bg="#191C51"
                                            primaryText="DEPOSIT"
                                            secondaryText="R$ 0"
                                        />
                                    </Flex>
                                    <Divider
                                        bg="#A0ABDB"
                                        margin="20px"
                                        style={{ width: "100%" }}
                                    />
                                    <Flex width="100%" gap="20px">
                                        <Button
                                            text="Deposit"
                                            background="#5484FF"
                                            width="100%"
                                            padding="15px 20px"
                                            addon={wallet}
                                        />
                                        <Button
                                            text="Withdraw"
                                            background="#F93967"
                                            width="100%"
                                            padding="15px 20px"
                                        />
                                    </Flex>
                                    <Text
                                        type="p"
                                        text="History"
                                        color="#A0ABDB"
                                        fontSize="13px"
                                        padding="10px"
                                        cursor="pointer"
                                    />
                                </PersonalCard>
                            </Flex>
                        </ImageGridLayout>
                    </PersonalCenterPageWrapper>
                </PageTemplate>
            </GuestLayout>
        </>
    );
};

export default PersonalCenter;
