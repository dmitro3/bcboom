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

const FooterWrapper = styled("div")(({}) => ({
    backgroundColor: "#000000",
    height: "fit-content",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "30px",
    fontFamily: "Montserrat, sans-serif",
    color: "white",
    paddingTop: "40px",
}));
const FooterLinks = styled("div")(({}) => ({
    display: "flex",
    gap: "80px",
    fontSize: "16px",
    color: "#8990AE",
    fontWeight: "700",
    position: "relative",
    zIndex: "101",
}));
const FooterLinkItem = styled("p")(({}) => ({
    cursor: "pointer",
    paddingBottom: "10px",
    borderBottom: "1px solid #8990AE",
}));
const FooterSocialIcons = styled("div")(({}) => ({
    display: "flex",
    gap: "30px",
    marginTop: "30px",
}));
const FooterSocialIcon = styled("div")(({}) => ({}));
const Footer = () => {
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
            link: "/vip-rank",
        },
    ];
    const socials = [
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
    return (
        <FooterWrapper>
            <FooterLinks>
                {footerItems.map((item, index) => {
                    return (
                        <FooterLinkItem key={index}>{item.text}</FooterLinkItem>
                    );
                })}
            </FooterLinks>
            <FooterSocialIcons>
                {socials.map((item, index) => {
                    return (
                        <FooterSocialIcon key={index}>
                            <img src={item} alt="social-icon" />
                        </FooterSocialIcon>
                    );
                })}
            </FooterSocialIcons>
        </FooterWrapper>
    );
};

export default Footer;
