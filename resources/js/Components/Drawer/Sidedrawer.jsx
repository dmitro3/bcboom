import { setDrawerState } from "@/redux/app-state/app-slice";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import close from "../../../../public/images/svg/close.svg";
import bcboom from "../../../../public/images/brand/bcboom.svg";
import crash from "../../../../public/images/others/drawercrash.png";
import limbo from "../../../../public/images/others/drawerlimbo.png";
import dice from "../../../../public/images/others/drawerdice.png";
import mines from "../../../../public/images/others/drawermines.png";
import keno from "../../../../public/images/others/drawerkeno.png";
import facebook from "../../../../public/images/svg/facebook.svg";
import instagram from "../../../../public/images/svg/instagram.svg";
import telegram from "../../../../public/images/svg/telegram.svg";
import twitter from "../../../../public/images/svg/twitter.svg";
import volume from "../../../../public/images/svg/volume.svg";
import us from "../../../../public/images/flags/us.svg";
import portugal from "../../../../public/images/flags/portugal.svg";

import { miscNavLinks, navlinks } from "@/data";
import { Divider } from "../Divider/Divider";
import CustomSelect from "../Dropdown/Select";
import { Link } from "@inertiajs/inertia-react";
const DrawerWrapper = styled("div")(({}) => ({
    width: "70vw",
    // height: "100%",
    background: "#1C2036!important",
    padding: "0 20px",
    position: "relative",
    
}));
const CloseIcon = styled("div")(({}) => ({
    position: "absolute",
    top: "20px",
    right: "20px",
    cursor: "pointer",
}));
const Logo = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "5px",
    "& img": {
        height: "50px",
    },
}));
const DrawerImages = styled("div")(() => ({
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    padding: "5px",
}));
const DrawerImage = styled("img")(({ index }) => ({
    width: "100%",
    "&:nth-child(1)": {
        gridRow: 1,
        gridColumn: "1/3",
    },
    "&:nth-child(2)": {
        gridRow: 2,
        gridColumn: 1,
    },
    "&:nth-child(3)": {
        gridRow: 2,
        gridColumn: 2,
    },
    "&:nth-child(4)": {
        gridRow: "3",
        gridColumn: "1",
    },
    "&:nth-child(5)": {
        gridRow: "3",
        gridColumn: "2",
    },
    // display: "grid",
}));
const NavItem = styled("div")(({ active }) => ({
    display: "flex",
    cursor: "pointer",
    paddingBottom: "4px",
    marginBottom: "20px",
    borderBottom: active && "2px solid #3586FF",
    width: "fit-content",
    p: {
        marginLeft: "5px",
        marginTop: "2px",
        fontSize: "12px",
        color: active ? "#3586FF" : "#8990AE",
        fontWeight: "700",
        fontFamily: "Montserrat, sans-serif",
        whiteSpace: "nowrap",
    },
    "&:last-child": {
        marginBottom: 0,
    },
    "& img": {
        filter:
            active &&
            "invert(41%) sepia(83%) saturate(2321%) hue-rotate(203deg) brightness(104%) contrast(103%)",
    },
}));
const NavLinks = styled("div")(() => ({
    background: "#1C2036",
    padding: "10px",
    width: "100%",
}));

const FooterSocialIcon = styled("div")(({}) => ({}));
const OtherSocialIcons = styled("div")(({}) => ({
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px 0",
}));
const VolumeIcon = styled("div")(({}) => ({
    background: "#2A3050",
    borderRadius: "10px",
    width: "85px",
    height: "44px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
const Sidedrawer = () => {
    const { drawerState } = useSelector((state) => state.app);
    const otherSocials = [facebook, instagram, telegram, twitter];
    const dispatcher = useDispatch();
    const [currentLanguage, setCurrentLanguage] = useState("english");
    function closeDrawer() {
        dispatcher(setDrawerState({ open: !drawerState.open }));
    }
    const location =
        typeof window !== undefined
            ? window.location.pathname.split("/")[1]
            : "";
    return (
        <Drawer
            anchor={"left"}
            open={drawerState.open}
            onClose={() =>
                dispatcher(setDrawerState({ open: !drawerState.open }))
            }
        >
            <DrawerWrapper>
                <CloseIcon
                    onClick={() =>
                        dispatcher(setDrawerState({ open: !drawerState.open }))
                    }
                >
                    <img src={close} alt="" />
                </CloseIcon>
                <Logo>
                    <img src={bcboom} alt="" />
                </Logo>
                <DrawerImages>
                    {[crash, mines, dice, limbo, keno].map((img, i) => (
                        <DrawerImage key={i} src={img} index={i} />
                    ))}
                </DrawerImages>
                <Divider bg="#8990ae78" />
                <NavLinks>
                    {navlinks.map((nav, i) => (
                        <NavItem
                            key={i}
                            active={location == nav.link.replace("/", "")}
                        >
                            <img src={nav.icon} alt={nav.name} />
                            <Link href={nav.link} onClick={closeDrawer}>
                                <p>{nav.name}</p>
                            </Link>
                        </NavItem>
                    ))}
                </NavLinks>
                <Divider bg="#8990ae78" />
                <NavLinks>
                    {miscNavLinks.map((nav, i) => (
                        <NavItem
                            key={i}
                            active={location == nav.link.replace("/", "")}
                        >
                            <img src={nav.icon} alt={nav.name} />
                            <Link href={nav.link} onClick={closeDrawer}>
                                <p>{nav.name}</p>
                            </Link>
                        </NavItem>
                    ))}
                </NavLinks>
                <Divider bg="#8990ae78" />
                <br />
                <CustomSelect
                    items={[
                        { value: "english", label: "English", icon: us },
                        {
                            value: "portuguese",
                            label: "Brazil",
                            icon: portugal,
                        },
                    ]}
                    value={currentLanguage}
                    setValue={setCurrentLanguage}
                />
                <br />

                <VolumeIcon>
                    <img src={volume} alt="" style={{ height: "22px" }} />
                </VolumeIcon>
                <Divider bg="#8990ae78" />
                <OtherSocialIcons>
                    {otherSocials.map((item, index) => {
                        return (
                            <FooterSocialIcon key={index}>
                                <img
                                    src={item}
                                    alt="social-icon"
                                    style={{ height: "20px" }}
                                />
                            </FooterSocialIcon>
                        );
                    })}
                </OtherSocialIcons>
            </DrawerWrapper>
        </Drawer>
    );
};

export default Sidedrawer;
