import { styled } from "@mui/system";
import { useState } from "react";
import bclogo from "../../../../public/images/brand/bcboom.svg";
import {
    default as brazil,
    default as china,
    default as malta,
    default as portugal,
    default as russia,
    default as us,
} from "../../../../public/images/flags/us.svg";
import cashback from "../../../../public/images/svg/cashback.svg";
import facebook from "../../../../public/images/svg/facebook.svg";
import fairness from "../../../../public/images/svg/fairness.svg";
import help from "../../../../public/images/svg/help.svg";
import instagram from "../../../../public/images/svg/instagram.svg";
import menu from "../../../../public/images/svg/menu.svg";
import pad from "../../../../public/images/svg/pad.svg";
import players from "../../../../public/images/svg/players.svg";
import referral from "../../../../public/images/svg/referral.svg";
import telegram from "../../../../public/images/svg/telegram.svg";
import ticket from "../../../../public/images/svg/ticket.svg";
import twitter from "../../../../public/images/svg/twitter.svg";
import volume from "../../../../public/images/svg/volume.svg";
import wifi from "../../../../public/images/svg/wifi.svg";
// import Dropdown from "../Dropdown/Dropdown";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import { setDrawerState } from "@/redux/app-state/app-slice";
import { Link } from "@inertiajs/inertia-react";
import { Dropdown as AntDDropdown } from "antd";
import { useDispatch, useSelector } from "react-redux";
import UserDropdown from "../UserDropdown/UserDropdown";
import { setAuthModalState } from "@/redux/auth/auth-slice";

const HeaderWrapper = styled("div")(() => ({
    padding: "10px 20px",
    marginBottom: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
}));
const styles = (gap) => {
    return {
        display: "flex",
        justifyContent: "center",
        gap: gap || "20px",
        alignItems: "center",
    };
};
const SocialIcons = styled("p")(() => ({
    cursor: "pointer",
}));
const HeaderPlatformStats = styled("div")(({ gap }) => ({
    ...styles(gap),
}));
const HeaderPlatformLinks = styled("div")(() => ({
    ...styles("12px"),
}));
const HeaderPlatformLinkItems = styled("div")(() => ({
    ...styles(),
    marginRight: "15px",
}));
const HeaderItems = styled("div")(({ active }) => ({
    display: "flex",
    cursor: "pointer",
    p: {
        marginLeft: "5px",
        marginTop: "3px",
        fontSize: "12px",
        color: active ? "#3586FF" : "#8990AE",
        fontWeight: "700",
        fontFamily: "Montserrat, sans-serif",
    },
}));
const LogoWrapper = styled("div")(() => ({
    position: "absolute",
    left: "48%",
    transform: "translateX(-50%)",
    top: "-63%",
    marginLeft: "20px",
    paddingTop: "40px",
}));

const Menu = ({ data, setValue }) => {
    return (
        <div>
            {data?.map((v, i) => (
                <div
                    onClick={() => {
                        setValue(v);
                    }}
                    key={i}
                >
                    <img src={v.icon} alt="" />
                </div>
            ))}
        </div>
    );
};
const DesktopHeader = () => {
    const statsItems = [
        {
            id: 1,
            icon: wifi,
            text: "423 Online",
        },
        {
            id: 2,
            icon: players,
            text: "4.2k Players",
        },
        {
            id: 3,
            icon: pad,
            text: "1.5k games",
        },
        {
            id: 4,
            icon: ticket,
            text: "1.2K won today",
        },
    ]
    const links = [
        {
            id: 1,
            text: "Cashback",
            icon: cashback,
            link: "/cashback",
            protected: true,
        },
        {
            id: 2,
            text: "Fairness",
            icon: fairness,
            link: "/fairness",
            protected: true,
        },
        {
            id: 4,
            text: "Referral",
            icon: referral,
            link: "/referral",
            protected: true,
        },
        {
            id: 3,
            text: "Help",
            icon: help,
            link: "/help",
            protected: true,
        },
    ]
    const socials = [
        {
            id: 1,
            icon: facebook,
        },
        {
            id: 2,
            icon: instagram,
        },
        {
            id: 3,
            icon: telegram,
        },
        {
            id: 4,
            icon: twitter,
        },
        // {
        //     id: 6,
        //     icon: language,
        // },
        {
            id: 5,
            icon: volume,
        },
    ]
    const [currentCountryIndex, setCurrentCountryIndex] = useState("us");
    const countries = [
        { text: "china", icon: china },
        { text: "russia", icon: russia },
        { text: "portugal", icon: portugal },
        { text: "brazil", icon: brazil },
        { text: "us", icon: us },
        { text: "malta", icon: malta },
    ];
    const { isMobile } = useScreenResolution();
    if (isMobile) {
        return <div>hi am mobile</div>;
    }
    const location =
        typeof window !== undefined
            ? window.location.pathname.split("/")[1]
            : "";
    const { user } = useSelector((state) => state.auth);
    const dispatcher = useDispatch();
    return (    
        <HeaderWrapper>
            <HeaderPlatformStats>
                {statsItems.map((item) => (
                    <Link href={item.link}>
                        <HeaderItems key={item.id}>
                            <img src={item.icon} alt={`${item.text}`} />
                            <p>{item.text}</p>
                        </HeaderItems>
                    </Link>
                ))}
            </HeaderPlatformStats>
            <LogoWrapper>
                <Link href="/">
                    <img src={bclogo} alt="bcboom" />
                </Link>
            </LogoWrapper>
            <HeaderPlatformLinks>
                <HeaderPlatformLinkItems
                    onClick={() => {
                        if (!user?.user) {
                            dispatcher(
                                setAuthModalState({
                                    open: true,
                                    tab: 0,
                                })
                            );
                        }
                    }}
                >
                    {/* {user?.user} ? */}
                    {links.map((item) => (
                        <Link href={user?.user ? item.link : "/"}>
                            <HeaderItems
                                key={item.id}
                                active={location == item.link.replace("/", "")}
                            >
                                <img
                                    src={item.icon}
                                    alt={`${item.text}`}
                                    style={{
                                        filter:
                                            location ==
                                                item.link.replace("/", "") &&
                                            "invert(41%) sepia(83%) saturate(2321%) hue-rotate(203deg) brightness(104%) contrast(103%)",
                                    }}
                                />
                                <p>{item.text}</p>
                            </HeaderItems>
                        </Link>
                    ))}
                </HeaderPlatformLinkItems>
                {socials.slice(0, socials.length - 1).map((item) => (
                    <SocialIcons key={item.id}>
                        <img src={item.icon} alt={`${item.id}`} />
                    </SocialIcons>
                ))}
                <AntDDropdown
                    trigger={["click"]}
                    menu={<Menu countries={countries} />}
                    placement="bottomLeft"
                    className="w-full"
                >
                    <>
                        <img
                            src={
                                countries.find(
                                    (el) => el.text === currentCountryIndex
                                ).icon
                            }
                            alt="United States"
                        />
                    </>
                </AntDDropdown>

                <SocialIcons>
                    <img
                        src={socials[socials.length - 1].icon}
                        alt={`${socials.id}`}
                    />
                </SocialIcons>
            </HeaderPlatformLinks>
        </HeaderWrapper>
    );
};

const MobileHeaderWrapper = styled("div")(() => ({
    display: "flex",
    padding: "10px",
    flex: '1 1 0px',
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
    background: "#1E2443",
}));
const MoreIconWrapper = styled("div")(() => ({
    cursor: "pointer",
}));
const Logo = styled("div")(() => ({}));
const ButtonComponents = styled("div")(() => ({
    display: "flex",
    gap: "10px",
}));
export const MobileHeader = () => {
    const dispatcher = useDispatch();
    const { drawerState } = useSelector((state) => state.app);
    const { user } = useSelector((state) => state.auth);
    return (
        <MobileHeaderWrapper>
            <MoreIconWrapper
                onClick={() =>
                    dispatcher(setDrawerState({ open: !drawerState.open }))
                }
            >
                <img src={menu} alt="menu" style={{ height: "35px" }} />
            </MoreIconWrapper>
            <Logo>
                <Link href="/">
                    <img
                        src={bclogo}
                        alt="bcboom logo"
                        style={{ width: "70%" }}
                    />
                </Link>
            </Logo>
            <ButtonComponents>
                <UserDropdown isLoggedIn={user?.user} />
            </ButtonComponents>
        </MobileHeaderWrapper>
    );
};

export default DesktopHeader;
