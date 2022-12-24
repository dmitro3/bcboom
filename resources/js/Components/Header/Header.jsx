import { styled } from "@mui/system";
import wifi from "../../../../public/images/svg/wifi.svg";
import players from "../../../../public/images/svg/players.svg";
import pad from "../../../../public/images/svg/pad.svg";
import ticket from "../../../../public/images/svg/ticket.svg";
import cashback from "../../../../public/images/svg/cashback.svg";
import fairness from "../../../../public/images/svg/fairness.svg";
import help from "../../../../public/images/svg/help.svg";
import referral from "../../../../public/images/svg/referral.svg";
import facebook from "../../../../public/images/svg/facebook.svg";
import instagram from "../../../../public/images/svg/instagram.svg";
import telegram from "../../../../public/images/svg/telegram.svg";
import volume from "../../../../public/images/svg/volume.svg";
import twitter from "../../../../public/images/svg/twitter.svg";
import us from "../../../../public/images/flags/us.svg";
import malta from "../../../../public/images/flags/us.svg";
import portugal from "../../../../public/images/flags/us.svg";
import brazil from "../../../../public/images/flags/us.svg";
import china from "../../../../public/images/flags/us.svg";
import russia from "../../../../public/images/flags/us.svg";
import bclogo from "../../../../public/images/brand/bcboom.svg";
import { useState } from "react";
import menu from "../../../../public/images/svg/menu.svg";
// import Dropdown from "../Dropdown/Dropdown";
import { Dropdown as AntDDropdown } from "antd";
import { useScreenResolution } from "@/hooks/useScreeResolution";
import Button from "../Button/Button";
import { setDrawerState } from "@/redux/app-state/app-slice";
import { useDispatch, useSelector } from "react-redux";
import { setAuthModalState } from "@/redux/auth/auth-slice";
import { Link } from "@inertiajs/inertia-react";

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
const HeaderItems = styled("div")(() => ({
    display: "flex",
    cursor: "pointer",
    p: {
        marginLeft: "5px",
        marginTop: "3px",
        fontSize: "12px",
        color: "#8990AE",
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
    const [statsItems] = useState([
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
    ]);
    const [links] = useState([
        {
            id: 1,
            text: "Cashback",
            icon: cashback,
        },
        {
            id: 2,
            text: "Fairness",
            icon: fairness,
        },
        {
            id: 4,
            text: "Referral",
            icon: referral,
        },
        {
            id: 3,
            text: "Help",
            icon: help,
        },
    ]);
    const [socials] = useState([
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
    ]);
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

    return (
        <HeaderWrapper>
            <HeaderPlatformStats>
                {statsItems.map((item) => (
                    <HeaderItems key={item.id}>
                        <img src={item.icon} alt={`${item.text}`} />
                        <p>{item.text}</p>
                    </HeaderItems>
                ))}
            </HeaderPlatformStats>
            <LogoWrapper>
                <Link href="/">
                    <img src={bclogo} alt="bcboom" />
                </Link>
            </LogoWrapper>
            <HeaderPlatformLinks>
                <HeaderPlatformLinkItems>
                    {links.map((item) => (
                        <HeaderItems key={item.id}>
                            <img src={item.icon} alt={`${item.text}`} />
                            <p>{item.text}</p>
                        </HeaderItems>
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
    padding: "10px 20px",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
}));
const MoreIconWrapper = styled("div")(() => ({}));
const Logo = styled("div")(() => ({}));
const ButtonComponents = styled("div")(() => ({
    display: "flex",
    gap: "10px",
}));
export const MobileHeader = () => {
    const dispatcher = useDispatch();
    const { drawerState } = useSelector((state) => state.app);
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
                        style={{ height: "35px" }}
                    />
                </Link>
            </Logo>
            <ButtonComponents>
                {[
                    { text: "Login", link: "/login", bg: "#3586FF" },
                    { text: "Sign up", link: "/signup", bg: "#F93C56" },
                ].map((item, index) => (
                    <Button
                        text={item.text}
                        key={index}
                        background={item.bg}
                        onSubmit={() =>
                            dispatcher(
                                setAuthModalState({
                                    open: true,
                                    type: item.link.replace("/", ""),
                                })
                            )
                        }
                    />
                ))}
            </ButtonComponents>
        </MobileHeaderWrapper>
    );
};

export default DesktopHeader;
