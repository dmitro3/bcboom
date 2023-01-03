import { mobileNavLinks } from "@/data";
import { setDrawerState } from "@/redux/app-state/app-slice";
import { Link } from "@inertiajs/inertia-react";
import { styled } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex } from "../UtilComponents/Flex";

const MobieNavWrapper = styled("div")(() => ({
    width: "100%",
    height: "100px",
    backgroundColor: "#05071D",
    position: "fixed",
    bottom: 0,
    left: 0,
    zIndex: 100000,
}));

const InnerHeaderItem = styled("div")(({ active }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    cursor: "pointer",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
    background: active && "#3586FF",
    p: {
        marginLeft: "5px",
        marginTop: "9px",
        fontSize: "14px",
        color: active ? 'white' : '#8990AE',
        fontWeight: "700",
        fontFamily: "Montserrat, sans-serif",
        whiteSpace: "nowrap",
    },
}));

const MobileDivider = styled("div")(() => ({
    position: "absolute",
    bottom: "10px",
    left: "32%",
    // display: 'flex',
    height: "2px",
    borderRadius: "50px",
    backgroundColor: "white",
    // alignItems: 'center',
    // justifyContent: 'center',
    width: "40%",
}));

const MobileNav = () => {
    const dispatcher = useDispatch();
    const { drawerState } = useSelector((state) => state.app);

    const location =
        typeof window !== undefined
            ? window.location.pathname.split("/")[1]
            : "";
    return (
        <MobieNavWrapper>
            <Flex
                alignItems="center"
                justifyContent="space-between"
                padding="10px 20px"
            >
                {mobileNavLinks.map((item, index) => {
                    const Component = (
                        <InnerHeaderItem
                            key={index}
                            active={
                                item.navigatable &&
                                location == item.link.replace("/", "")
                            }
                        >
                            <img
                                src={item.icon}
                                alt={item.name}
                                style={{
                                    filter:
                                        location ==
                                            item.link.replace("/", "") &&
                                        "brightness(0) invert(1)",
                                }}
                            />
                            <p>{item.name}</p>
                        </InnerHeaderItem>
                    );
                    if (item.navigatable)
                        return <Link href={item.link}>{Component}</Link>;
                    return (
                        <div
                            onClick={() =>
                                item.link === "/menu" &&
                                dispatcher(
                                    setDrawerState({ open: !drawerState.open })
                                )
                            }
                        >
                            {Component}
                        </div>
                    );
                })}
            </Flex>
            <MobileDivider />
        </MobieNavWrapper>
    );
};

export default MobileNav;
