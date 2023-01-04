import { styled } from "@mui/system";
import React from "react";
import tower from "../../../../public/images/svg/tower.svg";
import stairs from "../../../../public/images/svg/stairs.svg";
import conflip from "../../../../public/images/svg/coinflip.svg";
import wheels from "../../../../public/images/svg/wheels.svg";
import roulette from "../../../../public/images/svg/roulette.svg";
import plinko from "../../../../public/images/svg/plinko.svg";
import limbo from "../../../../public/images/svg/limbo.svg";
import keno from "../../../../public/images/svg/keno.svg";
import mines from "../../../../public/images/svg/mines.svg";
import dice from "../../../../public/images/svg/dice.svg";
import turbor from "../../../../public/images/svg/turbor.svg";
import { Link } from "@inertiajs/inertia-react";

const SidebarWrapper = styled("div")(() => ({
    backgroundColor: "#000000",
    height: "100%",
    width: "78px",
    padding: "10px 20px",
    // paddingTop: "30px",
}));
const SidebarItems = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "10px",
}));
const SidebarItem = styled("div")(({ active }) => ({
    cursor: "pointer",
    background:
        active && "linear-gradient(136.85deg, #4E8CF8 3.02%, #225AC1 100%)",
    borderRadius: "5px",
    width: "38px",
    height: "38px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
const SimpleSidebar = () => {
    const sidebarItems = [
        {
            name: "Crash",
            icon: turbor,
            link: "/games/crash",
        },
        {
            name: "Dice",
            icon: dice,
            link: "/games/dice",
        },
        {
            name: "Mines",
            icon: mines,
            link: "/games/mines",
        },
        {
            name: "Keno",
            icon: keno,
            link: "/games/keno",
        },
        {
            name: "Limbo",
            icon: limbo,
            link: "/games/limbo",
        },
        {
            name: "Plinko",
            icon: plinko,
            link: "/games/plinko",
        },
        {
            name: "Roulette",
            icon: roulette,
            link: "/games/roulette",
        },
        {
            name: "Wheels",
            icon: wheels,
            link: "/games/wheels",
        },
        {
            name: "Conflip",
            icon: conflip,
            link: "/games/coin-flip",
        },
        {
            name: "Stairs",
            icon: stairs,
            link: "/games/stairs",
        },
        {
            name: "Tower",
            icon: tower,
            link: "/games/tower",
        },
    ];
    const location = window.location.pathname.split("/")[2];
    console.log("location: ", location);
    return (
        <SidebarWrapper>
            <SidebarItems>
                {sidebarItems.map((item, index) => (
                    <Link href={item.link}>
                        <SidebarItem
                            key={index}
                            active={location === item.name.toLowerCase()}
                        >
                            <img
                                src={item.icon}
                                alt={item.name}
                                style={{
                                    filter:
                                        location === item.name.toLowerCase()
                                            ? "brightness(0) invert(1)"
                                            : "",
                                }}
                            />
                        </SidebarItem>
                    </Link>
                ))}
            </SidebarItems>
        </SidebarWrapper>
    );
};

export default SimpleSidebar;
