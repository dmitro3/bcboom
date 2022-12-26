import { setAuthModalState } from "@/redux/auth/auth-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import userimg from "../../../../public/images/user/useravatar.png";
import Button from "../Button/Button";
import { Flex } from "../UtilComponents/Flex";
import brazillianreal from "../../../../public/images/currencies/brazillianreal.svg";
import wallet from "../../../../public/images/svg/wallet.svg";
import chevrondown from "../../../../public/images/svg/chevrondown.svg";
import chevronup from "../../../../public/images/svg/chevronup.svg";
import crown from "../../../../public/images/svg/crown.svg";
import vip from "../../../../public/images/svg/uservip.svg";
import history from "../../../../public/images/svg/history.svg";
import logout from "../../../../public/images/svg/logout.svg";
import { Dropdown as AntDropdown, Space } from "antd";
import { styled } from "@mui/system";
import Text from "../Text/Text";
import { Link } from "@inertiajs/inertia-react";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import { setWalletModalState } from "@/redux/wallet/wallet-slice";
const CurrencyWrapper = styled("div")(({ isMobile }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#3586FF",
    borderRadius: "50%",
    width: isMobile ? "32px" : "35px",
    height: isMobile ? "32px" : "35px",
    filter: "drop-shadow(0px 2px 8px rgba(53, 134, 255, 0.39))",
}));
const CurrentBalance = styled("div")(({ isMobile }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginLeft: "10px",
    // lineHeight: 1,
    marginBottom: "3px",
    "& p": {
        fontSize: isMobile ? "17px" : "20px",
        fontWeight: "bold",
        "&:first-child": {
            color: "white",
        },
        "&:last-child": {
            color: "#8990AE",
        },
    },
}));
const Wallet = styled("div")(({}) => ({
    color: "#8990AE",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "10px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
}));
const UserAvatar = styled("div")(({}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "15px",
}));
const UserImage = styled("div")(({ size }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#667BFF",
    borderRadius: "50%",
    width: size || "45px",
    height: size || "45px",
}));
const Chevron = styled("div")(({}) => ({
    marginLeft: "10px",
    cursor: "pointer",
}));
const UserDetailsWrapper = styled("div")(({}) => ({
    background: "#323879",
    borderRadius: "15px",
    marginTop: "20px",
}));

const Section = styled("div")(({}) => ({
    paddingRight: "90px",
    background: "#464D90",
    height: "100%",
    width: "100%",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
}));
const UserDetails = ({ user }) => {
    const sectionItems = [
        {
            text: "Personal Center",
            icon: crown,
            link: "/personal-center",
        },
        {
            text: "VIP Level",
            icon: vip,
            link: "/vip-level",
        },
        {
            text: "Game History",
            icon: history,
            link: "/game-history",
        },
        {
            text: "Log out",
            icon: logout,
            link: "/logout",
        },
    ];
    const [mouseOver, setMouseOver] = useState(-1);
    return (
        <UserDetailsWrapper>
            <Flex padding="30px">
                <UserImage size={"65px"}>
                    <img
                        src={user.avatar}
                        alt="useravatar"
                        style={{ height: "100%" }}
                    />
                </UserImage>
                <div style={{ marginLeft: "10px" }}>
                    <Text
                        type="p"
                        text={user.username}
                        color="white"
                        fontSize="22px"
                        fontWeight="bold"
                        marginLeft="10px"
                    />
                    <Text
                        type="p"
                        text={user.rank}
                        color="#FFDC62"
                        fontSize="18px"
                        fontWeight="bold"
                        marginLeft="10px"
                    />
                </div>
            </Flex>
            <Section>
                {sectionItems.map((item, index) => (
                    <Flex
                        padding="10px"
                        alignItems="center"
                        key={index}
                        gap="10px"
                        onMouseEnter={() => setMouseOver(index)}
                        onMouseLeave={() => setMouseOver(-1)}
                    >
                        <img
                            src={item.icon}
                            alt={item.text}
                            style={{
                                width: "24px",
                                filter:
                                    mouseOver === index &&
                                    "invert(99%) sepia(68%) saturate(0%) hue-rotate(151deg) brightness(111%) contrast(100%)",
                            }}
                        />
                        <Link href={item.link}>
                            <Text
                                type="p"
                                text={item.text}
                                color={
                                    mouseOver === index ? "white" : "#AEB8E9"
                                }
                                fontSize="16px"
                                fontWeight="800"
                                marginLeft="5px"
                                padding="0 10px"
                            />
                        </Link>
                    </Flex>
                ))}
            </Section>
        </UserDetailsWrapper>
    );
};
const UserDropdown = ({
    isLoggedIn,
    user = {
        avatar: userimg,
        username: "User202021",
        rank: "Rank 1",
        balance: "2430.76",
    },
}) => {
    const dispatcher = useDispatch();
    const [mouseOver, setMouseOver] = useState(false);
    const { isMobile } = useScreenResolution();
    if (!isLoggedIn)
        return (
            <>
                {[
                    { text: "Log In", link: "/login", bg: "#3586FF" },
                    { text: "Sign up", link: "/signup", bg: "#F93C56" },
                ].map((item, index) => (
                    <Button
                        text={item.text}
                        onSubmit={() =>
                            dispatcher(
                                setAuthModalState({
                                    open: true,
                                    type: item.link.replace("/", ""),
                                })
                            )
                        }
                        key={index}
                        background={item.bg}
                    />
                ))}
            </>
        );

    return (
        <Flex
            alignItems="flex-start"
            style={{ fontFamily: "Montserrat, sans-serif" }}
        >
            <CurrencyWrapper isMobile={isMobile}>
                <img
                    src={brazillianreal}
                    alt="brazillianreal"
                    style={{ height: isMobile ? "12px" : "18px" }}
                />
            </CurrencyWrapper>
            <div
                onClick={() => dispatcher(setWalletModalState({ open: true }))}
                style={{ cursor: "pointer" }}
            >
                <CurrentBalance isMobile={isMobile}>
                    <p>{user.balance.split(".")[0]}.</p>
                    <p>{user.balance.split(".")[1] || "00"}</p>
                </CurrentBalance>
                <Wallet>
                    <img
                        src={wallet}
                        alt="wallet"
                        style={{ height: isMobile ? "18px" : "20px" }}
                    />
                    <p style={{fontSize: '15px'}}>Wallet</p>
                </Wallet>
            </div>
            <UserAvatar>
                <AntDropdown
                    overlay={<UserDetails user={user} />}
                    onMouseEnter={() => setMouseOver(true)}
                    onMouseLeave={() => setMouseOver(false)}
                >
                    <Flex alignItems="center">
                        <UserImage size={isMobile ? "40px" : "45px"}>
                            <img
                                src={user.avatar}
                                alt="useravatar"
                                style={{ height: "100%", cursor: "pointer" }}
                            />
                        </UserImage>
                        <Chevron>
                            <img
                                src={mouseOver ? chevronup : chevrondown}
                                alt=""
                                style={{ height: "15px" }}
                            />
                        </Chevron>
                    </Flex>
                </AntDropdown>
            </UserAvatar>
        </Flex>
    );
};

export default UserDropdown;
