import React from "react";
import live from "../../../../public/images/svg/live.svg";
import race from "../../../../public/images/svg/race.svg";
import slots from "../../../../public/images/svg/slots.svg";
import games from "../../../../public/images/svg/games.svg";
import homeSvg from "../../../../public/images/svg/homeSvg.svg";
import bonus from "../../../../public/images/svg/bonus.svg";
import promotion from "../../../../public/images/svg/promotion.svg";
import vip from "../../../../public/images/svg/vip.svg";
import { styled } from "@mui/system";
import Button from "../Button/Button";

const InnerHeaderWrapper = styled("div")(() => ({
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
}));

const InnerHeaderItems = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
}));
const InnerHeaderItem = styled("div")(({ active }) => ({
    display: "flex",
    cursor: "pointer",
    paddingBottom: "5px",
    borderBottom: active && "2px solid #3586FF",
    p: {
        marginLeft: "5px",
        marginTop: "3px",
        fontSize: "12px",
        color: active ? "#3586FF" : "#8990AE",
        fontWeight: "700",
        fontFamily: "Montserrat, sans-serif",
    },
}));
const InnerHeader = () => {
    const innerHeaderItems = [
        {
            name: "Home",
            icon: homeSvg,
            link: "/",
            active: true,
        },
        {
            name: "Games",
            icon: games,
            link: "/games",
        },
        {
            name: "Slots",
            icon: slots,
            link: "/slots",
        },
        {
            name: "Race",
            icon: race,
            link: "/race",
        },
        {
            name: "Live Casino",
            icon: live,
            link: "/live",
        },
        {
            name: "Promotions",
            icon: promotion,
            link: "/promotions",
        },
        {
            name: "Bonus",
            icon: bonus,
            link: "/bonus",
        },
        {
            name: "VIP",
            icon: vip,
            link: "/vip",
        },
    ];

    return (
        <InnerHeaderWrapper>
            <InnerHeaderItems>
                {innerHeaderItems.slice(0, 4).map((item, index) => (
                    <InnerHeaderItem key={index} active={item.active}>
                        <img src={item.icon} alt={item.name} />
                        <p>{item.name}</p>
                    </InnerHeaderItem>
                ))}
            </InnerHeaderItems>
            <InnerHeaderItems>
                {innerHeaderItems.slice(4, 7).map((item, index) => (
                    <InnerHeaderItem key={index} active={item.active}>
                        <img src={item.icon} alt={item.name} />
                        <p>{item.name}</p>
                    </InnerHeaderItem>
                ))}
                {[
                    { text: "Login", link: "/login", bg: "#3586FF" },
                    { text: "Sign up", link: "/signup", bg: "#F93C56" },
                ].map((item, index) => (
                    <Button
                        text={item.text}
                        onSubmit={null}
                        key={index}
                        background={item.bg}
                    />
                ))}
            </InnerHeaderItems>
        </InnerHeaderWrapper>
    );
};

export default InnerHeader;
