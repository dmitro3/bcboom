import { setDrawerState } from "@/redux/app-state/app-slice";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import close from "../../../../public/images/svg/close.svg";
import bcboom from "../../../../public/images/brand/bcboom.svg";
import crash from "../../../../public/images/others/drawercrash.png";
import limbo from "../../../../public/images/others/drawerlimbo.png";
import dice from "../../../../public/images/others/drawerdice.png";
import mines from "../../../../public/images/others/drawermines.png";
import keno from "../../../../public/images/others/drawerkeno.png";
const DrawerWrapper = styled("div")(({}) => ({
    width: "70%",
    height: "100%",
    background: "#1C2036",
    // position: "relative",
}));
const CloseIcon = styled("div")(({}) => ({
    position: "absolute",
    top: "10px",
    right: " 10px",
}));
const Logo = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    "& img": {
        height: "50px",
    },
}));
const DrawerImages = styled("div")(() => ({
    display: "grid",
    gridTemplateColumns: ''
}));
const DrawerImage = styled("img")(() => ({
    width: '100%'
}));
const Sidedrawer = () => {
    const { drawerState } = useSelector((state) => state.app);
    console.log("drawerState", drawerState);
    const dispatcher = useDispatch();
    return (
        <Drawer
            anchor={"left"}
            open={drawerState.open}
            onClose={() =>
                dispatcher(setDrawerState({ open: !drawerState.open }))
            }
        >
            <DrawerWrapper
                style={{
                    position: "relative",
                    background: "#1C2036",
                    height: "100%",
                    width: "60vw",
                }}
            >
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
                        <DrawerImage key={i} src={img} />
                    ))}
                </DrawerImages>
            </DrawerWrapper>
        </Drawer>
    );
};

export default Sidedrawer;
