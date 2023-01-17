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
import avatarIcon from "../../../../public/images/user/useravatar.png";
import level1 from "../../../../public/images/levels/level1.svg";
import link from "../../../../public/images/svg/link.svg";
import walletImg from "../../../../public/images/svg/walletmini.svg";
import settings from "../../../../public/images/svg/settings.svg";
import TextWithBg from "@/Components/UtilComponents/TextWithBg";
import { Divider } from "@/Components/Divider/Divider";
import Button from "@/Components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
    changeNicknameModalState,
    getMe,
    setProfile,
} from "@/redux/profile/profileSlice";
import {
    getWallet,
    setWallet,
    setWalletModalState,
} from "@/redux/wallet/wallet-slice";
import { toast } from "react-toastify";
const PersonalCenterPageWrapper = styled("div")(({ isMobile }) => ({
    margin: "0 auto",
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

const RangeInput = styled("div")(({value}) => ({
    width: "100%",
    "input[type='range']": {
        background: `linear-gradient(to right, #3586FF 0%, #3586FF ${value}%, #62679E ${value}%, #62679E 100%)`,
        borderRadius: "10px",
        height: "18px",
        // width: "356px",
        outline: "none",
        transition: "background 450ms ease-in",
        WebkitAppearance: "none",
    },
    // "input[type='range']::-webkit-slider-runnable-track": {
    //     height: "10px",
    //     WebkitAppearance: "none",
    //     color: "blue",
    //     marginTop: "-1px",
    // },
    "input[type='range']::-webkit-slider-thumb": {
        width: "10px",
        WebkitAppearance: "none",
        // height: "50px",
        background: "red",
        // boxShadow: "-80px 0 0 80px #43e5f7",
    },
}));

const UserImage = styled("div")(({ size, background }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: background,
    borderRadius: "50%",
    width: size || "45px",
    height: size || "45px",
    cursor: "pointer",
}));

const TextWithIcon = ({ icon, text, width, height, onClick }) => {
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
            onClick={onClick}
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
// const CenterRange = () => {
//     return (
//         <div style={{}}>
//             <Flex justifyContent="space-between" width="80%">
//                 <Text
//                     type="p"
//                     text="Deposit"
//                     fontSize="15px"
//                     fontWeight="bold"
//                 />
//                 <Flex alignItems="center" gap="3px">
//                     <Text
//                         type="p"
//                         text="R$0"
//                         fontSize="15px"
//                         fontWeight="bold"
//                     />
//                     <small>/</small>
//                     <Text
//                         type="p"
//                         text="R$100"
//                         fontSize="15px"
//                         fontWeight="bold"
//                         color="#FFCD4D"
//                     />
//                 </Flex>
//             </Flex>
//             <RangeInput
//                 style={{
//                     width: "80%",
//                     marginTop: "10px",
//                 }}
//             >
//                 <Flex alignItems="center" gap="6px">
//                     <input
//                         type="range"
//                         max={100}
//                         min={0}
//                         value={10}
//                         style={{ width: "100%" }}
//                     />
//                     <Text text="0%" type="p" fontWeight="bold" />
//                 </Flex>
//             </RangeInput>
//         </div>
//     );
// };
const PersonalCenter = () => {
    const { isMobile } = useScreenResolution();
    // const {
    //     user: { user },
    // } = useSelector((state) => state.auth);
    const dispatcher = useDispatch();
    const { profile } = useSelector((state) => state.profile);
    const { wallet, level } = useSelector((state) => state.wallet);
    useEffect(() => {
        const getProfile = async () => {
            const response = await dispatcher(getMe());
            dispatcher(setProfile(response?.payload?.data));
        };
        // const getWalletInfo = async () => {
        //     const response = await dispatcher(getWallet());
        //     const data = response?.payload?.data;
        //     dispatcher(
        //         setWallet({
        //             ...data,
        //             deposit: +data?.deposit || 0,
        //             bet: +data?.bet || 0,
        //         })
        //     );
        // };
        if (!profile) {
            getProfile();
        }
        // // if (!wallet) {
        // getWalletInfo();
        // // }
    }, [profile]);

    const [copied, setCopied] = useState(false);
    const { profileColor } = useSelector((state) => state.profile);
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
                                margin: "10px",
                            }}
                            index={0}
                            page="personal-center"
                        >
                            <Flex
                                alignItems="stretch"
                                gap="20px"
                                direction={isMobile ? "column" : "row"}
                                margin={isMobile ? "60px 0 0" : "60px 0"}
                                justifyContent="center"
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
                                        <UserImage
                                            background={profileColor}
                                            size="80px"
                                        >
                                            <img
                                                src={
                                                    profile?.image || avatarIcon
                                                }
                                                alt=""
                                                style={{ height: "100%" }}
                                            />
                                        </UserImage>
                                        <div style={{ textAlign: "center" }}>
                                            <Text
                                                type={"p"}
                                                text={profile?.username}
                                                fontSize={"15px"}
                                                color={"white"}
                                                fontWeight={"700"}
                                                paddingBottom={"10px"}
                                            />
                                            <TextWithIcon
                                                icon={link}
                                                text={
                                                    copied ? "Copied" : "Copy"
                                                }
                                                onClick={() => {
                                                    navigator.clipboard.writeText(
                                                        profile?.username
                                                    );
                                                    setCopied(true);
                                                    toast.info(
                                                        "Your username is copied"
                                                    );
                                                    setTimeout(() => {
                                                        setCopied(false);
                                                    }, 5000);
                                                }}
                                            />
                                            <div
                                                onClick={() =>
                                                    dispatcher(
                                                        changeNicknameModalState(
                                                            {
                                                                open: true,
                                                            }
                                                        )
                                                    )
                                                }
                                            >
                                                <Text
                                                    type={"p"}
                                                    text="Change Avatar"
                                                    fontSize={"14px"}
                                                    color="#A0ABDB"
                                                    cursor="pointer"
                                                />
                                            </div>
                                        </div>
                                    </Flex>

                                    <TextWithIcon
                                        icon={settings}
                                        text="Change Nickname"
                                        width="80%"
                                        height="40px"
                                        onClick={() =>
                                            dispatcher(
                                                changeNicknameModalState({
                                                    open: true,
                                                })
                                            )
                                        }
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
                                                text={`R$ ${wallet?.deposit}`}
                                                fontSize="15px"
                                                fontWeight="bold"
                                            />
                                            <small>/</small>
                                            <Text
                                                type="p"
                                                // text="R$100"
                                                text={`R$${level?.maxDeposit}`}
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
                                        value={level.depositProgress}
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
                                                text={`${level.depositProgress}%`}
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
                                                text={`R$ ${wallet?.bet || 0}`}
                                                fontSize="15px"
                                                fontWeight="bold"
                                            />
                                            <small>/</small>
                                            <Text
                                                type="p"
                                                text={`R$${level?.maxBet}`}
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
                                        value={level.betProgress}
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
                                                text={`${level.betProgress}%`}
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
                                        text={
                                            +wallet?.bet +
                                            +wallet?.deposit +
                                            +wallet?.bonus
                                        }
                                        fontSize="28px"
                                        color="#64A2FF"
                                        fontWeight="700"
                                        paddingBottom="20px"
                                    />
                                    <Flex
                                        justifyContent="space-between"
                                        alignItems="center"
                                        width="100%"
                                        gap="20px"
                                    >
                                        <TextWithBg
                                            bg="#191C51"
                                            primaryText="BET"
                                            secondaryText={`R$ ${
                                                wallet?.bet || 0
                                            }`}
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
                                            secondaryText={`R$ ${
                                                wallet?.deposit || 0
                                            }`}
                                        />
                                    </Flex>
                                    <Divider
                                        bg="#A0ABDB"
                                        margin="20px"
                                        style={{ width: "100%" }}
                                    />
                                    <Flex
                                        width="100%"
                                        gap="20px"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Button
                                            text="Deposit"
                                            background="#5484FF"
                                            width="100%"
                                            padding="15px 20px"
                                            addon={walletImg}
                                            onSubmit={() => {
                                                dispatcher(
                                                    setWalletModalState({
                                                        open: true,
                                                        tab: 0,
                                                    })
                                                );
                                            }}
                                        />
                                        <Button
                                            text="Withdraw"
                                            background="#F93967"
                                            width="100%"
                                            padding="15px 20px"
                                            onSubmit={() => {
                                                dispatcher(
                                                    setWalletModalState({
                                                        open: true,
                                                        tab: 1,
                                                    })
                                                );
                                            }}
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
