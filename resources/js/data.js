import live from "../../public/images/svg/live.svg";
import race from "../../public/images/svg/race.svg";
import slots from "../../public/images/svg/slots.svg";
import vip from "../../public/images/user/vipicon.svg";
import mobilenav from "../../public/images/user/mobilehamgurger.svg";
import share from "../../public/images/user/share.svg";
import games from "../../public/images/svg/games.svg";
import homeSvg from "../../public/images/svg/homeSvg.svg";
import bonus from "../../public/images/svg/bonus.svg";
import promotion from "../../public/images/svg/promotion.svg";
import user from "../../public/images/svg/user.svg";
import referral from "../../public/images/svg/referral.svg";
import cashback from "../../public/images/svg/cashback.svg";
import fairness from "../../public/images/svg/fairness.svg";
import help from "../../public/images/svg/help.svg";

export const navlinks = [
    {
        name: "Home",
        icon: homeSvg,
        link: "/",
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
        link: "/live-casino",
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
    // {
    //     name: "Bonus",
    //     link: "/promotions/bonus_everyday",
    // },
    // {
    //     name: "VIP",
    //     icon: vip,
    //     link: "/promotions/exclusive",
    // },
];

export const mobileNavLinks = [
    {
        name: "Home",
        icon: homeSvg,
        link: "/",
        navigatable: true
    },
    {
        name: "VIP",
        icon: vip,
        link: "/vip",
        navigatable: true
    },
    {
        name: "Share",
        icon: share,
        link: "/share",
        navigatable: false
    },

    {
        name: "Profile",
        icon: user,
        link: "/personal-center",
        navigatable: true
    },
    {
        name: "Menu",
        icon: mobilenav,
        link: "/menu",
        navigatable: false
    },
];


export const miscNavLinks = [
    {
        id: 1,
        name: "Cashback",
        icon: cashback,
        link: '/cashback'
    },
    {
        id: 2,
        name: "Fairness",
        icon: fairness,
        link: '/fairness'
    },
    {
        id: 4,
        name: "Referral",
        icon: referral,
        link: '/referral'
    },
    {
        id: 3,
        name: "Help",
        icon: help,
        link: '/help'
    },
];