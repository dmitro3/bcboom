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
import language from "../../../../public/images/svg/language.svg";
import { useState } from "react";
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

const Header = () => {
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
        {
            id: 6,
            icon: language,
        },
        {
            id: 5,
            icon: volume,
        },
    ]);

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
            <HeaderPlatformLinks>
                <HeaderPlatformLinkItems>
                    {links.map((item) => (
                        <HeaderItems key={item.id}>
                            <img src={item.icon} alt={`${item.text}`} />
                            <p>{item.text}</p>
                        </HeaderItems>
                    ))}
                </HeaderPlatformLinkItems>
                {socials.map((item) => (
                    <SocialIcons key={item.id}>
                        <img src={item.icon} alt={`${item.id}`} />
                    </SocialIcons>
                ))}
            </HeaderPlatformLinks>
        </HeaderWrapper>
    );
};

export default Header;
