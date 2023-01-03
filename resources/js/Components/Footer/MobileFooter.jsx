import { styled } from "@mui/system";
import React from "react";
import felix from "../../../../public/images/svg/felix.svg";
import pix from "../../../../public/images/svg/pix.svg";
import evoplay from "../../../../public/images/svg/evoplay.svg";
import elzugi from "../../../../public/images/svg/elzugi.svg";
import endorphinaTextLogo from "../../../../public/images/svg/endorphinaTextLogo.svg";
import facebookTextLogo from "../../../../public/images/svg/facebookTextLogo.svg";
import telegramTextLogo from "../../../../public/images/svg/telegramTextLogo.svg";
import elikTextLogo from "../../../../public/images/svg/elikTextLogo.svg";
import mastercardTextLogo from "../../../../public/images/svg/mastercardTextLogo.svg";
import visaTextLogo from "../../../../public/images/svg/visaTextLogo.svg";
import google from "../../../../public/images/svg/google.svg";
import instagramText from "../../../../public/images/svg/igtextlogo.svg";
import facebook from "../../../../public/images/svg/facebook.svg";
import instagram from "../../../../public/images/svg/instagram.svg";
import telegram from "../../../../public/images/svg/telegram.svg";
import twitter from "../../../../public/images/svg/twitter.svg";
import { Divider } from "../Divider/Divider";
import { Link } from "@inertiajs/inertia-react";

const FooterWrapper = styled("div")(({}) => ({
    backgroundColor: "#191D3A",
    height: "fit-content",
    width: "100%",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // flexDirection: "row",
    padding: "30px",
    fontFamily: "Montserrat, sans-serif",
    color: "white",
    paddingTop: "80px",
    marginBottom: "100px",
}));
const FooterLinks = styled("div")(({}) => ({
    // display: "flex",
    // gap: "80px",
    fontSize: "16px",
    color: "#8990AE",
    fontWeight: "700",
    position: "relative",
    zIndex: "101",
}));
const FooterLinkItem = styled("p")(({}) => ({
    cursor: "pointer",
    paddingBottom: "2px",
    borderBottom: "1px solid #8990AE",
    width: "fit-content",
    marginBottom: "26px",
}));
const FooterSocialIcons = styled("div")(({}) => ({
    // display: "flex",
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: "30px",
    margin: "60px 0",
}));
const FooterSocialIcon = styled("div")(({}) => ({

}));
const OtherSocialIcons = styled("div")(({}) => ({
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
}));
const MobileFooter = () => {
    const footerItems = [
        {
            text: "Terms of Service",
            link: "/terms-of-service",
        },
        {
            text: "Privacy Policy",
            link: "/privacy-policy",
        },
        {
            text: "Fairness",
            link: "/fairness",
        },
        {
            text: "VIP Rank",
            link: "/vip",
        },
    ];
    const socials = [
        google,
        instagramText,
        mastercardTextLogo,
        visaTextLogo,
        telegramTextLogo,
        elikTextLogo,
        felix,
        pix,
        evoplay,
        elzugi,
        endorphinaTextLogo,
        facebookTextLogo,
    ];
    const otherSocials = [facebook, instagram, telegram, twitter];
    return (
        <FooterWrapper>
            <FooterLinks>
                {footerItems.map((item, index) => {
                    return (
                        <Link href={item.link}>
                            <FooterLinkItem key={index}>
                                {item.text}
                            </FooterLinkItem>
                        </Link>
                    );
                })}
            </FooterLinks>
            <Divider bg="#8990ae78" />
            <FooterSocialIcons>
                {socials.map((item, index) => {
                    return (
                        <FooterSocialIcon key={index}>
                            <img src={item} alt="social-icon" style={{height : '25px'}} />
                        </FooterSocialIcon>
                    );
                })}
            </FooterSocialIcons>
            <Divider bg="#8990ae78" />
            <OtherSocialIcons>
                {otherSocials.map((item, index) => {
                    return (
                        <FooterSocialIcon key={index}>
                            <img src={item} alt="social-icon" style={{height:'20px'}} />
                        </FooterSocialIcon>
                    );
                })}
            </OtherSocialIcons>
        </FooterWrapper>
    );
};

export default MobileFooter;
